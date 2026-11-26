export default function Services() {
  const services = [
    {
      title: "Digital Queue Ticketing",
      description:
        "Students generate a unique #PQ ticket in seconds with their course topic and question summary.",
    },
    {
      title: "Live Position Tracking",
      description:
        "View the exact number of students ahead of you and see when your status changes from Waiting to Inside Office.",
    },
    {
      title: "Course & Faculty Search",
      description:
        "Filter professors by subject department or search instantly by course code, room number, or professor name.",
    },
    {
      title: "Professor Queue Dashboard",
      description:
        "Faculty members can view student topics ahead of time, call the next student in line, and close completed sessions.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          Platform Features
        </span>
        <h1 className="text-3xl font-bold text-white mt-1">Our Services</h1>
        <p className="text-slate-400 mt-2">
          Built for both students and instructors to make academic advising efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition"
          >
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}