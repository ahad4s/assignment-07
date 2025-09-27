import React from "react";

export default function TaskStatus({ tasks, resolved, completeTask }) {
    return (
        <div className="flex flex-col gap-6">
            {/* Task Status Section */}
            <div className="p-4 bg-white shadow">
                <h2 className="text-base md:text-lg font-bold mb-3">Task Status</h2>
                {tasks.length === 0 ? (
                    <p className="text-sm text-gray-500">No tasks in progress.</p>
                ) : (
                    <div className="flex flex-col gap-3">
                        {tasks.map((t) => (
                            <div
                                key={t.id}
                                className="bg-white shadow rounded-lg p-4 flex flex-col gap-2"
                            >
                                <span className="font-bold text-gray-700 text-sm md:text-base">{t.title}</span>
                                <button
                                    onClick={() => completeTask(t)}
                                    className="bg-green-500 text-white rounded-lg px-4 py-2 w-full font-semibold hover:bg-green-600 transition-colors text-sm md:text-base"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Resolved Tasks Section */}
            <div className="p-4 bg-white shadow">
                <h2 className="text-base md:text-lg font-bold mb-3">Resolved Tasks</h2>
                {resolved.length === 0 ? (
                    <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                ) : (
                    <div className="flex flex-col gap-3">
                        {resolved.map((t) => (
                            <div
                                key={t.id}
                                className="bg-white shadow rounded-lg p-4 flex flex-col gap-2"
                            >
                                <span className="font-bold text-gray-700 text-sm md:text-base">{t.title}</span>
                                <span className="text-green-600 font-medium text-xs md:text-sm">Resolved</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}