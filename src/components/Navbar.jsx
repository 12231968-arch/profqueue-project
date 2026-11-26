import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ waitingCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Live Office Hours", path: "/live-queue", badge: waitingCount },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-cyan-400 tracking-wide">
          ProfQueue
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white border border-slate-700 px-3 py-1.5 rounded-lg text-sm"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition flex items-center gap-2 ${
                location.pathname === link.path
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {link.badge !== undefined && (
                <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1 flex items-center justify-between ${
                location.pathname === link.path
                  ? "text-cyan-400"
                  : "text-slate-300"
              }`}
            >
              <span>{link.name}</span>
              {link.badge !== undefined && (
                <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}