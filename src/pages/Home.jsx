import { Link } from "react-router-dom";

export default function Home({ doctors, tickets }) {
  const waitingCount = tickets.filter((t) => t.status === "waiting").length;
  const servedCount = tickets.filter((t) => t.status === "done").length;
  const estWait = waitingCount * 7;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-12 text-center space-y-6">
        <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Smart Campus Queue Management
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Skip the Hallway Line for <span className="text-cyan-400">Office Hours</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Reserve your spot digitally, track how many students are ahead of you in real time, and walk in right when it is your turn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            to="/live-queue"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
          >
            Join Live Office Hours
          </Link>
          <Link
            to="/about"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Learn How It Works
          </Link>
        </div>
      </section>

      {/* Live Queue Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-center">
          <p className="text-3xl font-bold text-cyan-400">{doctors.length}</p>
          <p className="text-sm text-slate-400 mt-1">Active Professors</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-center">
          <p className="text-3xl font-bold text-amber-400">{waitingCount}</p>
          <p className="text-sm text-slate-400 mt-1">Students Waiting</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-center">
          <p className="text-3xl font-bold text-emerald-400">{servedCount}</p>
          <p className="text-sm text-slate-400 mt-1">Sessions Completed</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-center">
          <p className="text-3xl font-bold text-purple-400">{estWait} min</p>
          <p className="text-sm text-slate-400 mt-1">Est. Total Queue Time</p>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <span className="text-cyan-400 font-bold text-lg">01. Find Professor</span>
          <p className="text-slate-400 text-sm mt-2">
            Search by instructor name, course code, or department to check active office hours.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <span className="text-cyan-400 font-bold text-lg">02. Take a Digital Ticket</span>
          <p className="text-slate-400 text-sm mt-2">
            Submit your name, ID, and question topic to get an instant queue pass (#PQ-XXXX).
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <span className="text-cyan-400 font-bold text-lg">03. Enter on Time</span>
          <p className="text-slate-400 text-sm mt-2">
            Monitor your queue position live and enter the office when called by your professor.
          </p>
        </div>
      </section>
    </div>
  );
}