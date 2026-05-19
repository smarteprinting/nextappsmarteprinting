'use client';
import React from "react";

const PrintPerfectSection = () => {
    return (
        <section className="w-full pt-12 pb-4 bg-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-4xl font-black text-slate-900 mb-3 uppercase tracking-tighter">
                        Print Perfect
                    </h2>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">
                        Smart, fast, and affordable printing. Grab top printer deals today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrintPerfectSection;
