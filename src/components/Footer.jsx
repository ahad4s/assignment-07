import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-10 py-8 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {/* about ticket system section*/}
                <div>
                    <h2 className="font-bold mb-2">CS — Ticket System</h2>
                    <p className="text-sm text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                </div>
                {/* about company menu */}
                <div>
                    <h3 className="font-bold mb-2">Company</h3>
                    <p className="hover:text-gray-300 cursor-pointer">About Us</p>
                    <p className="hover:text-gray-300 cursor-pointer">Our Mission</p>
                    <p className="hover:text-gray-300 cursor-pointer">Contact Sales</p>
                </div>
                {/* services menu section */}
                <div>
                    <h3 className="font-bold mb-2">Services</h3>
                    <p className="hover:text-gray-300 cursor-pointer">Products & Services</p>
                    <p className="hover:text-gray-300 cursor-pointer">Customer Stories</p>
                    <p className="hover:text-gray-300 cursor-pointer">Download Apps</p>
                </div>
                {/* information menu section */}
                <div>
                    <h3 className="font-bold mb-2">Information</h3>
                    <p className="hover:text-gray-300 cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-gray-300 cursor-pointer">Terms & Conditions</p>
                    <p className="hover:text-gray-300 cursor-pointer">Join Us</p>
                </div>
                {/* social menu */}
                <div>
                    <h3 className="font-bold mb-2">Social Links</h3>
                    <a href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
                    >
                        <FaTwitter className="text-white" /> @CS - Ticket System
                    </a>
                    <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
                    >
                        <FaLinkedin className="text-white" /> @CS - Ticket System
                    </a>
                    <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
                    >
                        <FaFacebook className="text-white" /> @CS - Ticket System
                    </a>
                    <a
                    href="mailto:support@cst.com"
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
                    >
                        <FaEnvelope className="text-white" /> support@cst.com
                    </a>
                </div>
            </div>

            {/* copyright divider line */}
            <hr className="border-gray-700 mt-6" />
            {/* copyright text */}
            <p className="text-center text-gray-500 text-sm mt-6">
                © 2025 CS — Ticket System. All rights reserved.
            </p>
        </footer>
    );
}