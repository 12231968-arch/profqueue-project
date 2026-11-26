import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Office Hours Schedule");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          University Support &amp; Inquiries
        </span>
        <h1 className="text-3xl font-bold text-white mt-1">Contact Us</h1>
        <p className="text-slate-400 mt-2 text-sm max-w-2xl">
          Need assistance with professor office hours, room locations, or queue
          access? Reach out to the Computer Science department or send a message
          below.
        </p>
      </div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Column: University & Campus Info */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div>
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-md">
              LIU Campus Directory
            </span>
            <h2 className="text-xl font-bold text-white mt-3">
              Lebanese International University
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              School of Arts &amp; Sciences — Department of Computer Science
            </p>
          </div>

          <div className="space-y-4 text-sm border-t border-slate-800 pt-4">
            <div>
              <p className="text-xs font-semibold uppercase text-cyan-400">
                Campus Location
              </p>
              <p className="text-slate-300 mt-1">
                Beirut Campus, Mouseitbeh — Faculty Offices (Blocks A, B &amp; C)
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-cyan-400">
                Academic Support Email
              </p>
              <p className="text-slate-300 mt-1">cs.support@liu.edu.lb</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-cyan-400">
                Campus Phone
              </p>
              <p className="text-slate-300 mt-1">+961 1 706 881</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-cyan-400">
                Advising &amp; Desk Hours
              </p>
              <p className="text-slate-300 mt-1">
                Monday – Friday | 8:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Note for Students:</strong>{" "}
            Please check the{" "}
            <span className="text-cyan-400">Live Office Hours</span> page
            before visiting faculty offices to verify real-time queue status.
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Send a Direct Message
          </h2>

          {submitted && (
            <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl text-sm mb-4">
              Thank you! Your message has been sent to the LIU academic support
              desk.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  University Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="id@students.liu.edu.lb"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Inquiry Category
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white"
              >
                <option value="Office Hours Schedule">
                  Office Hours Schedule
                </option>
                <option value="Queue Ticket Issue">Queue Ticket Issue</option>
                <option value="Course Advising">Course Advising</option>
                <option value="General Feedback">General Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your question or feedback here..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-xl text-sm transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}