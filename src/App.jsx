import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import ticketsData from "./data/tickets.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [tickets, setTickets] = useState(ticketsData);
    const [tasks, setTasks] = useState([]);
    const [resolved, setResolved] = useState([]);
    const addToTask = (ticket) => {
        if (tasks.find((t) => t.id === ticket.id)) {
            toast.info("Already in Task Status!");
            return;
        }
        setTasks([...tasks, ticket]);
        toast.success("Added to Task Status!");
    };
    const completeTask = (ticket) => {
        setTasks(tasks.filter((t) => t.id !== ticket.id));
        setResolved([...resolved, ticket]);
        setTickets(tickets.filter((t) => t.id !== ticket.id));
        toast.success("Task Completed!");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />
            {/* ticket cards section */}
            <div className="px-6 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Tickets</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
                <div
                    className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tickets.map((ticket) => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            addToTask={addToTask}
                        />
                    ))}
                </div>
                {/* task status & resolved section */}
                <TaskStatus
                    tasks={tasks}
                    resolved={resolved}
                    completeTask={completeTask}
                />
            </div>

            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
