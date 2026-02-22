// src/components/MedidasForm.jsx
import { useEffect, useMemo, useState } from "react";
import { USERS } from "./data/data"; // ✅ corregido (antes estaba ./data/data)

const STORAGE_KEY = "measures_history_v1";

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function safeNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function sortByDateDesc(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function deltaArrow(current, prev) {
  if (prev == null || current == null) return null;
  if (current === prev) return "→";
  return current < prev ? "↓" : "↑";
}

function DeltaBadge({ symbol }) {
  if (!symbol) return null;

  const cls =
    symbol === "↓"
      ? "bg-emerald-500/15 text-emerald-200 border-emerald-500/25"
      : symbol === "↑"
      ? "bg-rose-500/15 text-rose-200 border-rose-500/25"
      : "bg-white/5 text-slatey-100 border-white/10";

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs border ${cls}`}>
      {symbol}
    </span>
  );
}

// ✅ FUERA del componente principal (evita remounts raros/focus loss)
function InputField({ id, label, name, value, onChange, error, unit, step = "0.1" }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slatey-100">
        {label}
      </label>

      <div className="mt-1 flex items-center gap-2">
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          inputMode="decimal"
          type="number"
          step={step}
          onMouseDown={(e) => e.stopPropagation()}
          className={[
            "input",
            error ? "border-rose-500/40 focus:ring-2 focus:ring-rose-500/20" : "",
          ].join(" ")}
          placeholder="0"
        />
        {unit ? <span className="chip whitespace-nowrap">{unit}</span> : null}
      </div>

      {error ? <p className="mt-1 text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}

export default function MedidasForm({ userId }) {
  const [history, setHistory] = useState([]);
  const [form, setForm] = useState({
    date: todayISO(),
    weightKg: "",
    waistMinCm: "",
    waistMaxCm: "",
    armFlexCm: "",
    hipCm: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setHistory(loadHistory().sort(sortByDateDesc));
  }, []);

  const userName = USERS.find((u) => u.id === userId)?.name || userId;

  const sortedHistory = useMemo(() => {
    return history.slice().sort(sortByDateDesc);
  }, [history]);

  const userHistorySorted = useMemo(() => {
    return sortedHistory.filter((r) => r.userId === userId);
  }, [sortedHistory, userId]);

  const validate = () => {
    const e = {};

    if (!form.date) e.date = "La fecha es obligatoria.";

    const weightKg = safeNumber(form.weightKg);
    const waistMinCm = safeNumber(form.waistMinCm);
    const waistMaxCm = safeNumber(form.waistMaxCm);
    const armFlexCm = safeNumber(form.armFlexCm);
    const hipCm = safeNumber(form.hipCm);

    if (!Number.isFinite(weightKg) || weightKg <= 0) e.weightKg = "Peso inválido.";
    if (!Number.isFinite(waistMinCm) || waistMinCm <= 0) e.waistMinCm = "Cintura mín. inválida.";
    if (!Number.isFinite(waistMaxCm) || waistMaxCm <= 0) e.waistMaxCm = "Cintura máx. inválida.";
    if (!Number.isFinite(armFlexCm) || armFlexCm <= 0) e.armFlexCm = "Brazo inválido.";
    if (!Number.isFinite(hipCm) || hipCm <= 0) e.hipCm = "Cadera inválida.";

    if (Number.isFinite(waistMinCm) && Number.isFinite(waistMaxCm) && waistMinCm > waistMaxCm) {
      e.waistMinCm = "No puede ser mayor que cintura máx.";
      e.waistMaxCm = "Debe ser mayor o igual a cintura mín.";
    }

    const duplicate = history.some((r) => r.userId === userId && r.date === form.date);
    if (duplicate) e.date = "Ya existe una carga para esta fecha en este usuario.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const newRow = {
      id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
      userId,
      date: form.date,
      weightKg: Number(form.weightKg),
      waistMinCm: Number(form.waistMinCm),
      waistMaxCm: Number(form.waistMaxCm),
      armFlexCm: Number(form.armFlexCm),
      hipCm: Number(form.hipCm),
      createdAt: Date.now(),
    };

    const next = [newRow, ...history].sort(sortByDateDesc);
    setHistory(next);
    saveHistory(next);

    setForm({
      date: todayISO(),
      weightKg: "",
      waistMinCm: "",
      waistMaxCm: "",
      armFlexCm: "",
      hipCm: "",
    });
    setErrors({});
  };

  // último vs anterior (del usuario actual)
  const lastTwo = userHistorySorted.slice(0, 2);
  const prev = lastTwo[1] || null;

  return (
    <div className="space-y-4 min-w-0">
      {/* Form */}
      <div className="card card-hover p-4 sm:p-5 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-mint whitespace-nowrap">Progreso</span>
              <span className="chip whitespace-nowrap">localStorage</span>
            </div>
            <h2 className="mt-3 text-base sm:text-lg font-semibold text-slatey-50">
              Registro de Medidas
            </h2>
            <p className="muted mt-1 text-sm">Cargá tus medidas semanales · {userName}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="m_date" className="text-sm font-medium text-slatey-100">
              Fecha
            </label>
            <input
              id="m_date"
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              onMouseDown={(e) => e.stopPropagation()}
              className={[
                "input mt-1",
                errors.date ? "border-rose-500/40 focus:ring-2 focus:ring-rose-500/20" : "",
              ].join(" ")}
            />
            {errors.date ? <p className="mt-1 text-xs text-rose-300">{errors.date}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              id="m_weightKg"
              label="Peso"
              name="weightKg"
              value={form.weightKg}
              onChange={(e) => setForm((f) => ({ ...f, weightKg: e.target.value }))}
              error={errors.weightKg}
              unit="kg"
            />
            <InputField
              id="m_armFlexCm"
              label="Brazo (Contracción)"
              name="armFlexCm"
              value={form.armFlexCm}
              onChange={(e) => setForm((f) => ({ ...f, armFlexCm: e.target.value }))}
              error={errors.armFlexCm}
              unit="cm"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              id="m_waistMinCm"
              label="Cintura Mínima"
              name="waistMinCm"
              value={form.waistMinCm}
              onChange={(e) => setForm((f) => ({ ...f, waistMinCm: e.target.value }))}
              error={errors.waistMinCm}
              unit="cm"
            />
            <InputField
              id="m_waistMaxCm"
              label="Cintura Máxima"
              name="waistMaxCm"
              value={form.waistMaxCm}
              onChange={(e) => setForm((f) => ({ ...f, waistMaxCm: e.target.value }))}
              error={errors.waistMaxCm}
              unit="cm"
            />
          </div>

          <InputField
            id="m_hipCm"
            label="Cadera"
            name="hipCm"
            value={form.hipCm}
            onChange={(e) => setForm((f) => ({ ...f, hipCm: e.target.value }))}
            error={errors.hipCm}
            unit="cm"
          />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="muted text-xs">Los datos se guardan en este dispositivo.</p>
            <button type="submit" className="btn btn-primary h-11 px-5">
              Guardar
            </button>
          </div>
        </form>
      </div>

      {/* Historial */}
      <div className="card card-hover p-4 sm:p-5 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slatey-50">Historial</h3>
            <p className="muted mt-1 text-sm">Más reciente primero · incluye usuario</p>
          </div>
          <span className="chip whitespace-nowrap">{sortedHistory.length} registros</span>
        </div>

        {sortedHistory.length === 0 ? (
          <p className="muted mt-4 text-sm">Todavía no hay registros.</p>
        ) : (
          <>
            {/* ✅ Scroll SOLO dentro de la tabla (no rompe el layout del body) */}
            <div className="mt-4 -mx-4 sm:mx-0">
              <div className="overflow-x-auto px-4 sm:px-0">
                <table className="w-max min-w-full text-left text-sm">
                  <thead className="text-xs text-slatey-200/70">
                    <tr className="border-b border-white/10">
                      <th className="py-2 pr-3 font-medium whitespace-nowrap">Fecha</th>
                      <th className="py-2 pr-3 font-medium whitespace-nowrap">Usuario</th>
                      <th className="py-2 pr-3 font-medium whitespace-nowrap">Peso</th>
                      <th className="py-2 pr-3 font-medium whitespace-nowrap">Cintura Min</th>

                      {/* 👇 Ocultas en mobile para evitar overflow */}
                      <th className="py-2 pr-3 font-medium whitespace-nowrap hidden sm:table-cell">
                        Cintura Max
                      </th>
                      <th className="py-2 pr-3 font-medium whitespace-nowrap hidden sm:table-cell">
                        Brazo
                      </th>
                      <th className="py-2 pr-3 font-medium whitespace-nowrap hidden sm:table-cell">
                        Cadera
                      </th>

                      <th className="py-2 pr-3 font-medium whitespace-nowrap">Δ</th>
                    </tr>
                  </thead>

                  <tbody className="text-slatey-50">
                    {sortedHistory.map((r) => {
                      const sameUser = sortedHistory.filter((x) => x.userId === r.userId);
                      const idx = sameUser.findIndex((x) => x.id === r.id);
                      const prevRow = idx >= 0 ? sameUser[idx + 1] : null;

                      const deltas = {
                        weightKg: deltaArrow(r.weightKg, prevRow?.weightKg),
                        waistMinCm: deltaArrow(r.waistMinCm, prevRow?.waistMinCm),
                        waistMaxCm: deltaArrow(r.waistMaxCm, prevRow?.waistMaxCm),
                        armFlexCm: deltaArrow(r.armFlexCm, prevRow?.armFlexCm),
                        hipCm: deltaArrow(r.hipCm, prevRow?.hipCm),
                      };

                      const mainDelta = deltas.weightKg || deltas.waistMinCm || null;

                      return (
                        <tr key={r.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-2 pr-3 whitespace-nowrap">{r.date}</td>
                          <td className="py-2 pr-3 whitespace-nowrap">
                            {USERS.find((u) => u.id === r.userId)?.name || r.userId}
                          </td>
                          <td className="py-2 pr-3 whitespace-nowrap">{r.weightKg} kg</td>
                          <td className="py-2 pr-3 whitespace-nowrap">{r.waistMinCm} cm</td>

                          <td className="py-2 pr-3 whitespace-nowrap hidden sm:table-cell">
                            {r.waistMaxCm} cm
                          </td>
                          <td className="py-2 pr-3 whitespace-nowrap hidden sm:table-cell">
                            {r.armFlexCm} cm
                          </td>
                          <td className="py-2 pr-3 whitespace-nowrap hidden sm:table-cell">
                            {r.hipCm} cm
                          </td>

                          <td className="py-2 pr-3 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <DeltaBadge symbol={mainDelta} />
                              <span className="muted text-xs">
                                {mainDelta === "↓"
                                  ? "Mejoró"
                                  : mainDelta === "↑"
                                  ? "Subió"
                                  : "Igual"}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparativa */}
            {userHistorySorted.length > 0 ? (
              <div className="mt-4 rounded-xl2 border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-slatey-50 min-w-0 truncate">
                    Último vs Anterior · {userName}
                  </div>
                  <span className="chip whitespace-nowrap">comparativa</span>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ["Peso", "weightKg", "kg"],
                    ["Cintura Min", "waistMinCm", "cm"],
                    ["Cintura Max", "waistMaxCm", "cm"],
                    ["Brazo", "armFlexCm", "cm"],
                    ["Cadera", "hipCm", "cm"],
                  ].map(([label, key, unit]) => {
                    const curr = userHistorySorted[0]?.[key];
                    const pv = prev?.[key];
                    const sym = deltaArrow(curr, pv);
                    return (
                      <div key={key} className="rounded-xl border border-white/10 bg-ink-900/30 p-3">
                        <div className="flex items-center justify-between">
                          <div className="muted text-xs">{label}</div>
                          <DeltaBadge symbol={sym} />
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slatey-50">
                          {curr ?? "-"} {unit}
                        </div>
                        <div className="muted text-xs">Anterior: {pv ?? "-"}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}