import { useState } from "react";
import JoinQueueModal from "../components/JoinQueueModal";
import DoctorDashboard from "../components/DoctorDashboard";

export default function LiveOfficeHours({
  doctors,
  tickets,
  activeTicket,
  onJoinQueue,
  onCancelTicket,
  onCallNext,
  onFinishSession,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const subjects = ["All", ...new Set(doctors.map((d) => d.subject))];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.office.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSubject =
      selectedSubject === "All" || doc.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  // Calculate active student's live position in line
  let positionInLine = null;
  if (activeTicket && activeTicket.status === "waiting") {
    const waitingForDoc = tickets.filter(
      (t) => t.doctorId === activeTicket.doctorId && t.status === "waiting"
    );
    positionInLine =
      waitingForDoc.findIndex((t) => t.id === activeTicket.id) + 1;
  }

  return (
    <div className="space-y-8">
      <div>
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          Live Office Hours
        </span>
        <h1 className="text-3xl font-bold text-white mt-1">
          Find a Professor & Join the Line
        </h1>
      </div>

      {/* Active Ticket Banner */}
      {activeTicket && (
        <div className="bg-cyan-950/50 border border-cyan-500/50 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase text-cyan-400">
              Your Active Queue Pass — {activeTicket.ticketCode}
            </span>
            <h2 className="text-lg font-bold text-white mt-1">
              {activeTicket.studentName} • Status:{" "}
              <span className="uppercase text-amber-400">
                {activeTicket.status}
              </span>
            </h2>
            {activeTicket.status === "waiting" && (
              <p className="text-sm text-slate-300">
                Your position in line: <strong>#{positionInLine}</strong>
              </p>
            )}
            {activeTicket.status === "serving" && (
              <p className="text-sm text-emerald-400 font-semibold">
                It is your turn! Please enter the professor&apos;s office now.
              </p>
            )}
          </div>

          {activeTicket.status === "waiting" && (
            <button
              onClick={() => onCancelTicket(activeTicket.id)}
              className="bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 px-4 py-2 rounded-xl text-sm font-medium"
            >
              Cancel Ticket
            </button>
          )}
        </div>
      )}

      {/* Search & Subject Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Professor, Course Code (e.g. CSCI426), or Room..."
          className="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
        />
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white"
        >
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub === "All" ? "All Subjects" : sub}
            </option>
          ))}
        </select>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDoctors.map((doc) => {
          const docWaiting = tickets.filter(
            (t) => t.doctorId === doc.id && t.status === "waiting"
          ).length;

          return (
            <div
              key={doc.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-md">
                    {doc.courseCode}
                  </span>
                  <span className="text-xs text-amber-400 font-semibold">
                    {docWaiting} in line
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{doc.name}</h2>
                <p className="text-sm text-slate-400">{doc.courseName}</p>
                <div className="text-xs text-slate-400 pt-2 space-y-1">
                  <p>Office: {doc.office}</p>
                  <p>Hours: {doc.officeHours}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedDoctor(doc)}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-2.5 rounded-xl text-sm transition"
              >
                Join Queue Line
              </button>
            </div>
          );
        })}
      </div>

      {/* Join Modal */}
      <JoinQueueModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onSubmitTicket={onJoinQueue}
      />

      {/* Interactive Doctor Dashboard */}
      <DoctorDashboard
        doctors={doctors}
        tickets={tickets}
        onCallNext={onCallNext}
        onFinishSession={onFinishSession}
      />
    </div>
  );
}