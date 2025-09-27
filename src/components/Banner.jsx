import React from "react";
import vector1 from "../assets/vector1.png";

export default function Banner({ inProgressCount, resolvedCount }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* In-Progress section */}
            <div
                className="relative rounded-xl text-center py-12 text-white font-bold text-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)" }}
            >
                {/* images for In-Progress */}
                <img
                    src={vector1}
                    alt="left-bg"
                    className="absolute top-0 left-0 h-full object-contain opacity-50 brightness-125"
                />
                <img
                    src={vector1}
                    alt="right-bg"
                    className="absolute top-0 right-0 h-full object-contain opacity-50 brightness-125 scale-x-[-1]"
                />
                <p className="relative z-10">In-Progress</p>
                <h2 className="text-4xl relative z-10">{inProgressCount}</h2>
            </div>

            {/* Resolved section */}
            <div
                className="relative rounded-xl text-center py-12 text-white font-bold text-2xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, #54CF68 0%, #00827A 100%)" }}
            >
                {/* images for Resolved section */}
                <img
                    src={vector1}
                    alt="left-bg"
                    className="absolute top-0 left-0 h-full object-contain opacity-50 brightness-125"
                />
                <img
                    src={vector1}
                    alt="right-bg"
                    className="absolute top-0 right-0 h-full object-contain opacity-50 brightness-125 scale-x-[-1]"
                />
                <p className="relative z-10">Resolved</p>
                <h2 className="text-4xl relative z-10">{resolvedCount}</h2>
            </div>
        </div>
    );
}