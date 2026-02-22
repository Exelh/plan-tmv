// src/components/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { PLAN, USERS } from "./data/data";

const MEAL_LABELS = {
  desayuno: "Desayuno",
  mediaManana: "Media mañana",
  almuerzo: "Almuerzo",
  merienda: "Merienda",
  cena: "Cena",
};

const MEAL_TIME = {
  desayuno: "07:00–11:00",
  mediaManana: "07:00–11:00",
  almuerzo: "12:00–15:00",
  merienda: "16:00–19:00",
  cena: "20:00–23:00",
};

function toISODate(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfWeekISO(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay(); // 0=Dom,1=Lun...
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return toISODate(d);
}

function addDaysISO(iso, n) {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + n);
  return toISODate(d);
}

function getQuickMealsByHour(h) {
  if (h >= 7 && h <= 11) return ["desayuno", "mediaManana"];
  if (h >= 12 && h <= 15) return ["almuerzo"];
  if (h >= 16 && h <= 19) return ["merienda"];
  if (h >= 20 && h <= 23) return ["cena"];
  return [];
}

function Card({ title, subtitle, right, children }) {
  return (
    <div className="card card-hover">
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slatey-50">{title}</h3>
            {subtitle ? <p className="muted mt-1 text-sm">{subtitle}</p> : null}
          </div>
          {right ? <div>{right}</div> : null}
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function DayButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "h-10 rounded-xl px-3 text-sm ring-1 transition",
        active
          ? "bg-mint-500/25 text-mint-50 ring-mint-500/40 shadow-soft"
          : "bg-white/5 text-slatey-50 ring-white/10 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function Dashboard({ userId, onChangeUser, selectedDayISO, onChangeDay }) {
  const [now, setNow] = useState(new Date());
  const [weekStartISO, setWeekStartISO] = useState(startOfWeekISO(new Date()));

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!selectedDayISO) onChangeDay?.(toISODate(new Date()));
  }, [selectedDayISO, onChangeDay]);

  const planForUser = PLAN?.[userId];
  const todayISO = toISODate(now);
  const dayISO = selectedDayISO || todayISO;

  const meals = planForUser?.days?.[dayISO] || null;

  const quickMealKeys = useMemo(() => getQuickMealsByHour(now.getHours()), [now]);
  const quickMeals = useMemo(() => {
    if (!meals) return [];
    if (quickMealKeys.length === 0) {
      return [
        { key: "desayuno", items: meals.desayuno },
        { key: "almuerzo", items: meals.almuerzo },
        { key: "cena", items: meals.cena },
      ];
    }
    return quickMealKeys.map((k) => ({ key: k, items: meals[k] }));
  }, [meals, quickMealKeys]);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const iso = addDaysISO(weekStartISO, i);
      const d = new Date(`${iso}T00:00:00`);
      const label = d.toLocaleDateString("es-AR", { weekday: "short", day: "2-digit" });
      return { iso, label };
    });
  }, [weekStartISO]);

  const userName = USERS.find((u) => u.id === userId)?.name || userId;

  const prettyDate = now.toLocaleString("es-AR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const prettyTime = now.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="chip chip-mint">Home</span>
            <span className="chip">{prettyTime}</span>
          </div>
          <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-slatey-50">
            Health Dashboard
          </h2>
          <p className="muted mt-1 text-sm">
            {prettyDate} • {userName}
          </p>
        </div>

        <div className="card px-3 py-2 flex items-center gap-2">
          <span className="chip chip-mint">Usuario</span>
          <select
            value={userId}
            onChange={(e) => onChangeUser(e.target.value)}
            className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slatey-50 outline-none
                       focus:border-mint-500/50 focus:ring-2 focus:ring-mint-500/20"
          >
            {USERS.map((u) => (
              <option key={u.id} value={u.id} className="bg-ink-900">
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Card */}
      <Card
        title="Ahora"
        subtitle={
          quickMealKeys.length ? "Sugerencia según horario" : "Fuera de rango: resumen rápido del día"
        }
        right={
          <div className="h-10 w-10 rounded-xl bg-mint-500/15 border border-mint-500/25 grid place-items-center">
            <span className="text-mint-100 font-semibold">🍃</span>
          </div>
        }
      >
        <div className="flex flex-wrap gap-2">
          <span className="chip chip-mint">{userName}</span>
          <span className="chip">{dayISO}</span>
        </div>

        {!meals ? (
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm text-slatey-50">
              No hay plan cargado para este día ({dayISO}).
            </p>
            <p className="muted mt-1 text-xs">
              Tip: elegí otro día en “Semana”.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {quickMeals.map(({ key, items }) => (
              <div
                key={key}
                className="rounded-xl bg-white/5 border border-white/10 px-3 py-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-slatey-50">{MEAL_LABELS[key]}</div>
                  <span className="chip">{MEAL_TIME[key] || ""}</span>
                </div>

                <div className="mt-3 space-y-2">
                  {(items || []).map((it, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 rounded-xl bg-ink-900/30 border border-white/10 px-3 py-2"
                    >
                      <span className="text-mint-100">•</span>
                      <span className="text-sm text-slatey-50">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Calendario semanal */}
      <Card title="Semana" subtitle="Navegá por los días para ver el menú completo">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {weekDays.map((d) => (
              <DayButton key={d.iso} active={d.iso === dayISO} onClick={() => onChangeDay(d.iso)}>
                {d.label}
              </DayButton>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => setWeekStartISO(addDaysISO(weekStartISO, -7))} className="btn">
              ← Semana
            </button>
            <button onClick={() => setWeekStartISO(startOfWeekISO(new Date()))} className="btn btn-primary">
              Hoy
            </button>
            <button onClick={() => setWeekStartISO(addDaysISO(weekStartISO, 7))} className="btn">
              Semana →
            </button>
          </div>
        </div>

        {/* Menú completo del día */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["desayuno", "mediaManana", "almuerzo", "merienda", "cena"].map((k) => (
            <div key={k} className="rounded-xl2 border border-white/10 bg-white/5 p-4 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slatey-50">{MEAL_LABELS[k]}</div>
                <span className="chip">{MEAL_TIME[k] || ""}</span>
              </div>

              {!meals ? (
                <p className="muted mt-2 text-sm">Sin datos</p>
              ) : (
                <div className="mt-3 space-y-2">
                  {(meals[k] || []).map((it, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 rounded-xl bg-ink-900/30 border border-white/10 px-3 py-2"
                    >
                      <span className="text-mint-100">•</span>
                      <span className="text-sm text-slatey-50">{it}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}