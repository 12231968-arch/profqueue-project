export default function About() {
  return (
    <div className="space-y-8">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 space-y-4">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          About ProfQueue
        </span>
        <h1 className="text-3xl font-bold text-white">
          Modernizing University Office Hours
        </h1>
        <p className="text-slate-400 leading-relaxed">
          During peak exam weeks and project deadlines, students often wait in crowded hallways outside faculty offices without knowing how long the line is or whether the professor is still available.
        </p>
        <p className="text-slate-400 leading-relaxed">
          ProfQueue replaces physical waiting lines with a transparent digital queue. Students join remotely from anywhere on campus, while faculty manage incoming questions in an organized first-come, first-served order.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
          <h2 className="text-lg font-semibold text-rose-400">The Old Way</h2>
          <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
            <li>Crowded corridors outside faculty offices</li>
            <li>Uncertain wait times between lectures</li>
            <li>No advance context on what students need help with</li>
          </ul>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-2">
          <h2 className="text-lg font-semibold text-emerald-400">The ProfQueue Way</h2>
          <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
            <li>Instant digital ticket generation from phone or laptop</li>
            <li>Live visibility into queue order and status</li>
            <li>Structured session management for professors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}