import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>
          <span className="font-semibold text-slate-200">ProfQueue</span> — University Office Hours Queue System
        </div>

        <div className="flex flex-wrap gap-5">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/about" className="hover:text-cyan-400">About</Link>
          <Link to="/services" className="hover:text-cyan-400">Services</Link>
          <Link to="/live-queue" className="hover:text-cyan-400">Live Queue</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}