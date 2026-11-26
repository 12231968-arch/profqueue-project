import { useState } from "react";

export default function DoctorDashboard({
  doctors,
  tickets,
  onCallNext,
  onFinishSession,
}) {
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0]?.id || 1);

  const currentDoctor = doctors.find((d) => d.id === Number(selectedDoctorId));
  const doctorTickets = tickets.filter(
    (t) => t.doctorId === Number(selectedDoctorId)
  );
  const servingTicket = doctorTickets.find((t) => t.status === "serving");
  const waitingTickets = doctorTickets.filter((t) => t.status === "waiting");

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-semibold text-cyan-400 uppercase">
            Faculty Control Panel
          </span>
          <h2 className="text-xl font-bold text-white">Doctor Dashboard</h2>
        </div>

        <select
          value={selectedDoctorId}
          onChange={(e) => setSelectedDoctorId(Number(e.target.value))}
          className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white"
        >
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} ({doc.courseCode})
            </option>
          ))}
        </select>
      </div>

      {/* Currently Inside Office */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
        <p className="text-xs uppercase text-emerald-400 font-semibold mb-2">
          Inside Office Now ({currentDoctor?.office})
        </p>
        {servingTicket ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white">
                {servingTicket.ticketCode} — {servingTicket.studentName} (ID:{" "}
                {servingTicket.studentId})
              </p>
              <p className="text-sm text-slate-400">
                <span className="text-cyan-400">{servingTicket.topic}:</span>{" "}
                {servingTicket.question}
              </p>
            </div>
            <button
              onClick={() => onFinishSession(servingTicket.id)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm"
            >
              Finish Session
            </button>
          </div>
        ) : (
          <p className="text-sm text-slate-500">
            Office is currently empty. Call the next waiting student below.
          </p>
        )}
      </div>

      {/* Waiting Queue List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-300">
            Waiting Students ({waitingTickets.length})
          </h3>
          <button
            onClick={() => onCallNext(Number(selectedDoctorId))}
            disabled={waitingTickets.length === 0 || Boolean(servingTicket)}
            className="bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Call Next Student
          </button>
        </div>

        {waitingTickets.length === 0 ? (
          <p className="text-sm text-slate-500 bg-slate-950 p-4 rounded-xl border border-slate-800">
            No students waiting in line for {currentDoctor?.name}.
          </p>
        ) : (
          <div className="space-y-2">
            {waitingTickets.map((ticket, index) => (
              <div
                key={ticket.id}
                className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="text-xs font-bold text-cyan-400 mr-2">
                    #{index + 1} ({ticket.ticketCode})
                  </span>
                  <span className="font-semibold text-white">
                    {ticket.studentName}
                  </span>
                  <span className="text-xs text-slate-500 ml-2">
                    • {ticket.joinedAt}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    {ticket.topic} — {ticket.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}