import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialDoctors, initialTickets } from "./data/initialData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LiveOfficeHours from "./pages/LiveOfficeHours";
import Contact from "./pages/Contact";

export default function App() {
  const [doctors] = useState(initialDoctors);
  const [tickets, setTickets] = useState(initialTickets);
  const [activeTicketId, setActiveTicketId] = useState(null);

  const handleJoinQueue = (newEntry) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newTicket = {
      id: Date.now(),
      ticketCode: `#PQ-${randomNum}`,
      doctorId: newEntry.doctorId,
      studentName: newEntry.studentName,
      studentId: newEntry.studentId,
      topic: newEntry.topic,
      question: newEntry.question,
      status: "waiting",
      joinedAt: now,
    };

    setTickets([...tickets, newTicket]);
    setActiveTicketId(newTicket.id);
  };

  const handleCancelTicket = (ticketId) => {
    setTickets(tickets.filter((t) => t.id !== ticketId));
    if (activeTicketId === ticketId) {
      setActiveTicketId(null);
    }
  };

  const handleCallNext = (doctorId) => {
    const nextStudent = tickets.find(
      (t) => t.doctorId === doctorId && t.status === "waiting"
    );
    if (!nextStudent) return;

    setTickets(
      tickets.map((t) =>
        t.id === nextStudent.id ? { ...t, status: "serving" } : t
      )
    );
  };

  const handleFinishSession = (ticketId) => {
    setTickets(
      tickets.map((t) => (t.id === ticketId ? { ...t, status: "done" } : t))
    );
    if (activeTicketId === ticketId) {
      setActiveTicketId(null);
    }
  };

  const activeTicket = tickets.find((t) => t.id === activeTicketId) || null;
  const waitingCount = tickets.filter((t) => t.status === "waiting").length;

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar waitingCount={waitingCount} />

        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<Home doctors={doctors} tickets={tickets} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/live-queue"
              element={
                <LiveOfficeHours
                  doctors={doctors}
                  tickets={tickets}
                  activeTicket={activeTicket}
                  onJoinQueue={handleJoinQueue}
                  onCancelTicket={handleCancelTicket}
                  onCallNext={handleCallNext}
                  onFinishSession={handleFinishSession}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}