import React from "react";

// Basic Component Skeletons
export const HeroSectionSkeleton = () => (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="space-y-6">
            <div className="h-6 w-32 animate-pulse rounded-xl bg-slate-800"></div>
            <div className="space-y-3">
                <div className="h-12 w-full animate-pulse rounded-xl bg-slate-800"></div>
                <div className="h-12 w-5/6 animate-pulse rounded-xl bg-slate-800"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-slate-800/60"></div>
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-800/60"></div>
            </div>
            <div className="flex gap-4">
                <div className="h-12 w-32 animate-pulse rounded-full bg-slate-800"></div>
                <div className="h-12 w-32 animate-pulse rounded-full bg-slate-800"></div>
            </div>
        </div>
        <div className="aspect-square w-full animate-pulse rounded-full bg-slate-800/50"></div>
    </div>
);

export const AboutCardSkeleton = () => (
    <div className="flex h-64 w-full flex-col rounded-xl border border-cyan-500/20 bg-slate-900/80 p-6 shadow-2xl">
        <div className="mb-6 space-y-2">
            <div className="h-8 w-2/3 animate-pulse rounded bg-slate-800"></div>
            <div className="h-4 w-1/3 animate-pulse rounded bg-slate-800/60"></div>
        </div>
        <div className="mt-auto space-y-4 border-t border-slate-800/60 pt-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1"><div className="h-3 w-1/2 animate-pulse rounded bg-slate-800/40"></div><div className="h-4 w-full animate-pulse rounded bg-slate-800/80"></div></div>
                <div className="space-y-1"><div className="h-3 w-1/2 animate-pulse rounded bg-slate-800/40"></div><div className="h-4 w-full animate-pulse rounded bg-slate-800/80"></div></div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800/40 pt-4">
                <div className="space-y-1"><div className="h-3 w-1/2 animate-pulse rounded bg-slate-800/40"></div><div className="h-4 w-full animate-pulse rounded bg-slate-800/80"></div></div>
                <div className="space-y-1"><div className="h-3 w-1/2 animate-pulse rounded bg-slate-800/40"></div><div className="h-4 w-full animate-pulse rounded bg-slate-800/80"></div></div>
            </div>
        </div>
    </div>
);

export const SearchFilterSkeleton = () => (
    <div className="relative z-20 mb-10 grid gap-6 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center">
        {/* Search input skeleton */}
        <div className="h-[46px] w-full animate-pulse rounded-xl bg-slate-800/80"></div>
        
        {/* Buttons skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex gap-2 rounded-xl border border-slate-700/50 p-1 bg-slate-950/30">
                <div className="h-[42px] w-[88px] animate-pulse rounded-xl bg-slate-800/80"></div>
                <div className="w-px bg-slate-700/50 my-1" />
                <div className="h-[42px] w-[88px] animate-pulse rounded-xl bg-slate-800/80"></div>
            </div>
            <div className="h-[42px] w-44 animate-pulse rounded-xl bg-slate-800/80"></div>
        </div>
    </div>
);

export const CountryCardSkeleton = () => (
    <div className="flex h-[380px] w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg">
        <div className="h-44 w-full animate-pulse bg-slate-800/80"></div>
        <div className="flex flex-col p-5">
            <div className="mb-2 h-7 w-3/4 animate-pulse rounded bg-slate-800"></div>
            <div className="mb-2 h-5 w-5/6 animate-pulse rounded bg-slate-800/60"></div>
            <div className="mb-2 h-5 w-4/6 animate-pulse rounded bg-slate-800/60"></div>
            <div className="mb-4 h-5 w-full animate-pulse rounded bg-slate-800/60"></div>
            <div className="mt-3 inline-flex h-10 w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-800/50 px-8 py-2 animate-pulse"></div>
        </div>
    </div>
);

export const WonderCardSkeleton = () => (
    <div className="w-full flex justify-center py-20">
        <div className="flex w-[80vw] flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 aspect-video animate-pulse rounded-[40px] bg-slate-800/60 shadow-2xl"></div>
            <div className="w-full lg:w-1/2 space-y-6">
                <div className="h-10 w-3/4 animate-pulse rounded bg-slate-800"></div>
                <div className="space-y-3">
                    <div className="h-4 w-full animate-pulse rounded bg-slate-800/60"></div>
                    <div className="h-4 w-5/6 animate-pulse rounded bg-slate-800/60"></div>
                    <div className="h-4 w-4/6 animate-pulse rounded bg-slate-800/60"></div>
                </div>
                <div className="h-10 w-32 animate-pulse rounded-full bg-slate-800"></div>
            </div>
        </div>
    </div>
);

// Page Skeletons

export const HomeSkeleton = () => (
    <div className="pb-8">
        <HeroSectionSkeleton />
        <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                   <div className="mx-auto h-12 w-64 animate-pulse rounded bg-slate-800"></div>
                </div>
                <WonderCardSkeleton />
                <WonderCardSkeleton />
            </div>
        </section>
    </div>
);

export const AboutSkeleton = () => (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-14 text-center space-y-4">
            <div className="mx-auto h-12 w-3/4 max-w-md animate-pulse rounded bg-slate-800"></div>
            <div className="mx-auto h-6 w-1/2 max-w-sm animate-pulse rounded bg-slate-800/60"></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <AboutCardSkeleton key={i} />
            ))}
        </div>
    </section>
);

export const CountryPageSkeleton = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SearchFilterSkeleton />
            <div className="mb-8 flex justify-center">
                <div className="h-10 w-80 animate-pulse rounded-lg bg-slate-800/70"></div>
            </div>
            <div className="relative z-10 mb-6 flex justify-end">
                <div className="flex items-center gap-3">
                    <div className="h-4 w-24 animate-pulse rounded bg-slate-800/60"></div>
                    <div className="h-[40px] w-[70px] animate-pulse rounded-xl bg-slate-800/85"></div>
                </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <CountryCardSkeleton key={i} />
                ))}
            </div>
            <div className="mt-14 mb-8 flex justify-center">
                 <div className="flex items-center gap-2">
                     <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="h-10 w-8 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="h-10 w-8 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="h-10 w-8 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="px-2 text-slate-700">...</div>
                     <div className="h-10 w-8 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="h-10 w-8 animate-pulse rounded-xl bg-slate-800/70"></div>
                     <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-800/70"></div>
                 </div>
            </div>
        </section>
    );
};

export const CountryDetailsSkeleton = () => (
    <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-8 sm:py-10">
        <div className="relative min-h-[100dvh] overflow-hidden bg-slate-900/90 p-0 sm:min-h-0 sm:rounded-2xl sm:bg-transparent">
            <div className="ml-5 my-4 h-9 w-28 animate-pulse rounded-full bg-slate-800/85 sm:ml-1"></div>
            <div className="relative h-full min-h-[100dvh] w-full border-0 border-slate-700/50 sm:min-h-0 sm:rounded-2xl sm:border sm:bg-slate-900/90">
                <div className="relative overflow-hidden bg-slate-800/30 px-4 pb-8 pt-16 sm:px-8 sm:pt-8 sm:pb-10 sm:rounded-t-2xl">
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
                        <div className="flex flex-col items-center gap-4 lg:items-start">
                            <div className="h-56 w-full max-w-xs animate-pulse rounded-xl bg-slate-700/50 sm:h-64 sm:w-80"></div>
                            <div className="h-16 w-32 animate-pulse rounded-xl bg-slate-700/40"></div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="mb-4 h-12 w-64 animate-pulse rounded-lg bg-slate-700/50 mx-auto lg:mx-0"></div>
                            <div className="h-6 w-48 animate-pulse rounded bg-slate-700/40 mx-auto lg:mx-0"></div>
                            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="h-10 w-24 animate-pulse rounded-xl bg-slate-700/50"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 p-4 sm:p-8 lg:grid-cols-2">
                    <div className="space-y-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                       <div className="h-6 w-40 animate-pulse rounded bg-slate-700/50 mb-4"></div>
                       {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="h-10 w-full animate-pulse rounded-lg bg-slate-700/30"></div>
                       ))}
                    </div>
                    <div className="space-y-4 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                       <div className="h-6 w-40 animate-pulse rounded bg-slate-700/50 mb-4"></div>
                       {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="h-10 w-full animate-pulse rounded-lg bg-slate-700/30"></div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const ContactSkeleton = () => (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 mx-auto h-12 w-48 animate-pulse rounded bg-slate-800"></div>
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
                <div className="space-y-4">
                    <div className="h-12 w-full animate-pulse rounded-xl bg-slate-800/80"></div>
                    <div className="h-12 w-full animate-pulse rounded-xl bg-slate-800/80"></div>
                    <div className="h-40 w-full animate-pulse rounded-xl bg-slate-800/80"></div>
                    <div className="h-12 w-28 animate-pulse rounded-full bg-slate-800/80"></div>
                </div>
            </div>
            <div className="h-[360px] w-full animate-pulse rounded-xl bg-slate-800/60 sm:h-[460px]"></div>
        </div>
    </section>
);

export const MapPageSkeleton = () => (
    <section className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-4 lg:px-6">
        <div className="my-5 flex items-center gap-3">
            <div className="h-7 w-7 animate-pulse rounded-full bg-slate-800"></div>
            <div className="h-8 w-64 animate-pulse rounded bg-slate-800"></div>
        </div>
        <div className="relative h-[80vh] min-h-[280px] w-full animate-pulse overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 mb-10 sm:h-[50vh] lg:h-[90vh]"></div>
    </section>
);

export const WonderDetailsSkeleton = () => (
    <section className="mx-auto max-w-6xl p-0 sm:px-6 lg:px-8 sm:py-8 bg-slate-900 sm:bg-transparent min-h-[100dvh] sm:min-h-0">
        <div className="mb-8 mt-5 ml-4 sm:ml-0 h-9 w-24 animate-pulse rounded-full bg-slate-800/85"></div>
        <div className="relative overflow-hidden sm:rounded-xl border-0 sm:border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur-xl min-h-[100dvh] sm:min-h-0">
            <div className="h-64 sm:h-96 w-full animate-pulse bg-slate-800/80"></div>
            <div className="p-5 sm:p-10 space-y-6">
                <div className="h-10 w-3/4 animate-pulse rounded bg-slate-800/80"></div>
                <div className="flex gap-4">
                    <div className="h-6 w-32 animate-pulse rounded bg-slate-800/60"></div>
                    <div className="h-6 w-32 animate-pulse rounded bg-slate-800/60"></div>
                </div>
                <div className="h-[2px] w-full bg-slate-800/50"></div>
                <div className="space-y-3">
                   {Array.from({ length: 15 }).map((_, i) => (
                       <div key={i} className="h-4 w-full animate-pulse rounded bg-slate-800/40"></div>
                   ))}
                </div>
            </div>
        </div>
    </section>
);
