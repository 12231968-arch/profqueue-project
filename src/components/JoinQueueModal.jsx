import { useState } from "react";

export default function JoinQueueModal({ doctor, onClose, onSubmitTicket }) {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [topic, setTopic] = useState("Project Consultation");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");

  if (!doctor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim() || !studentId.trim() || !question.trim()) {
      setError("Please fill in your name, student ID, and question.");
      return;
    }

    onSubmitTicket({
      doctorId: doctor.id,
      studentName: studentName.trim(),
      studentId: studentId.trim(),
      topic,
      question: question.trim(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-white">Join Office Queue</h2>
            <p className="text-sm text-cyan-400">
              {doctor.name} ({doctor.courseCode})
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="bg-rose-500/10 border border-rose-500/40 text-rose-400 text-xs p-2.5 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Student Full Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              University Student ID
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="e.g. 12230000"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="Project Consultation">Project Consultation</option>
              <option value="Lab Code Debugging">Lab Code Debugging</option>
              <option value="Exam / Grade Review">Exam / Grade Review</option>
              <option value="Course Advising">Course Advising</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Short Question
            </label>
            <textarea
              rows="3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Briefly describe what you need help with..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm"
            >
              Generate Queue Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}