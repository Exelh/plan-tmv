// src/App.jsx
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import MedidasForm from "./components/MedidasForm";

export default function App() {
  const [userId, setUserId] = useState("A");
  const [dayISO, setDayISO] = useState(null);

  return (
    <div className="app-shell overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Top header */}
        <div className="card card-hover mb-5 p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="chip chip-mint">PWA</span>
                <span className="chip">Nutri Dashboard</span>
              </div>
              <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Plan alimenticio + Progreso
              </h1>
              <p className="muted mt-1 text-sm">
                Multi-usuario • Calendario semanal • Registro de medidas
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="chip">Usuario activo</span>
              <span className="chip chip-mint">
                {userId === "A" ? "Andrea" : "Exequiel"}
              </span>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <main className="grid gap-4 lg:grid-cols-3">
          <section className="lg:col-span-2 space-y-4 min-w-0">
            <Dashboard
              userId={userId}
              onChangeUser={setUserId}
              selectedDayISO={dayISO}
              onChangeDay={setDayISO}
            />
          </section>

          <section className="space-y-4 min-w-0">
            <MedidasForm userId={userId} />
          </section>
        </main>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slatey-200/60">
          TE AMO PEPI ❤️
        </div>
      </div>
    </div>
  );
}