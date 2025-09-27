import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow px-6 py-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">CS — Ticket System</h1>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <a href="#" className="hover:text-purple-600">Home</a>
                    <a href="#">FAQ</a>
                    <a href="#">Changelog</a>
                    <a href="#">Blog</a>
                    <a href="#">Download</a>
                    <a href="#">Contact</a>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">+ New Ticket</button>
                </div>
                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4">
                    <a href="#" className="hover:text-purple-600">Home</a>
                    <a href="#">FAQ</a>
                    <a href="#">Changelog</a>
                    <a href="#">Blog</a>
                    <a href="#">Download</a>
                    <a href="#">Contact</a>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full">+ New Ticket</button>
                </div>
            )}
        </nav>
    );
}