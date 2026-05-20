import React from "react";

const LoadingFallback = () => {
    return (
        <div className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-6 px-4 py-8">
            <div className="h-10 w-48 animate-pulse rounded-lg bg-slate-800/80"></div>
            
            <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-64 w-full animate-pulse rounded-xl border border-white/5 bg-slate-900/50 shadow-lg">
                       <div className="h-32 w-full rounded-t-xl bg-slate-800/60"></div>
                       <div className="p-4 space-y-3">
                           <div className="h-5 w-3/4 rounded bg-slate-700/60"></div>
                           <div className="h-4 w-5/6 rounded bg-slate-700/40"></div>
                           <div className="h-4 w-1/2 rounded bg-slate-700/40"></div>
                       </div>
                    </div>
                ))}
            </div>
            
            <div className="flex gap-4 pt-4">
                <div className="h-10 w-32 animate-pulse rounded-full bg-slate-800/60"></div>
                <div className="h-10 w-32 animate-pulse rounded-full bg-slate-800/60"></div>
            </div>
        </div>
    );
};

export default LoadingFallback;