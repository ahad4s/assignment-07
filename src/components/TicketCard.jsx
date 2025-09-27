import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function TicketCard({ ticket, addToTask }) {
    const statusStyles = {
        Open: {
            bg: "#B9F8CF",
            text: "#0B5E06",
            bullet: "#02A53B",
        },
        "In-Progress": {
            bg: "#F8F3B9",
            text: "#9C7700",
            bullet: "#FEBB0C",
        },
        Resolved: {
            bg: "#E0E0E0",
            text: "#555555",
            bullet: "#AAAAAA",
        },
    };

    const currentStatus = statusStyles[ticket.status] || statusStyles.Open;

    return (
        <div
            onClick={() => addToTask(ticket)}
            className="p-4 cursor-pointer bg-white shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
        >
            {/* Support Tickets Card section */}
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-700 text-sm md:text-base">{ticket.title}</h3>
                <div
                    className="flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
                    style={{ backgroundColor: currentStatus.bg, color: currentStatus.text }}
                >
                    <span
                        className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full mr-2"
                        style={{ backgroundColor: currentStatus.bullet }}
                    ></span>
                    {ticket.status}
                </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 flex-grow">{ticket.description}</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 text-xs md:text-sm text-gray-600 gap-2">
                <div>
                    <span className="font-medium">#{ticket.id}</span>{" "}
                    <span
                        className={`px-2 py-1 rounded text-xs ${ticket.priority === "HIGH"
                            ? "text-red-600"
                            : ticket.priority === "MEDIUM"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                    >
                        {ticket.priority} PRIORITY
                    </span>
                </div>
                <div className="flex items-center justify-start md:justify-end gap-2 text-xs md:text-sm">
                    <span>{ticket.customer}</span>
                    <span className="flex items-center gap-1">
                        <FaRegCalendarAlt className="text-gray-400" />
                        {ticket.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
}