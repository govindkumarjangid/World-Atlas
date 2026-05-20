import React from "react";

export const HeroSectionSkeleton = () => (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="space-y-6">
            <div className="animate-pulse  bg-slate-800/70 h-6 w-32 rounded-full" />
            <div className="space-y-3">
                <div className="animate-pulse  bg-slate-800/70 h-12 w-full rounded-xl" />
                <div className="animate-pulse  bg-slate-800/70 h-12 w-5/6 rounded-xl" />
                <div className="animate-pulse  bg-slate-800/70 h-12 w-2/3 rounded-xl" />
            </div>
            <div className="space-y-2">
                <div className="animate-pulse  bg-slate-800/70 h-4 w-full" />
                <div className="animate-pulse  bg-slate-800/70 h-4 w-3/4" />
            </div>
            <div className="w-fit mt-10">
                <div className="animate-pulse  bg-slate-800/70 h-12 w-40 rounded-full" />
            </div>
        </div>
        <div className="relative flex items-center justify-center">
            <div className="animate-pulse  bg-slate-800/70 aspect-square w-full max-w-md rounded-full border-4 border-slate-700/30" />
        </div>
    </div>
);

export const AboutCardSkeleton = () => (
    <div className="group relative flex flex-col rounded-xl border border-cyan-500/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 shadow-2xl backdrop-blur-md">

        <div className="animate-pulse  bg-slate-800/70 absolute right-4 top-4 h-10 w-10 rounded-full" />

        <div className="mb-6 pr-12">
            <div className="animate-pulse bg-slate-800/70 h-8 w-2/3" />
            <div className="animate-pulse bg-slate-800/70 mt-2 h-4 w-1/3 " />
        </div>

        <div className="mt-2 flex-grow space-y-4 border-t border-slate-800/60 pt-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="animate-pulse h-3 w-1/2 bg-slate-800/40" />
                    <div className="animate-pulse mt-1 h-4 w-full bg-slate-800/80" />
                </div>
                <div>
                    <div className="animate-pulse  h-3 w-1/2  bg-slate-800/40" />
                    <div className="animate-pulse  mt-1 h-4 w-full  bg-slate-800/80" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800/40 pt-4">
                <div>
                    <div className="animate-pulse h-3 w-1/2  bg-slate-800/40" />
                    <div className="animate-pulse mt-1 h-4 w-full  bg-slate-800/80" />
                </div>
                <div>
                    <div className="animate-pulse h-3 w-1/2  bg-slate-800/40" />
                    <div className="animate-pulse mt-1 h-4 w-full  bg-slate-800/80" />
                </div>
            </div>
        </div>

        <div className="mt-6 -xl border border-white/5 bg-slate-900/50 p-4">
            <div className="animate-pulse  h-3 w-full  bg-slate-800/40" />
            <div className="animate-pulse  mt-1.5 h-3 w-4/5  bg-slate-800/40" />
            <div className="animate-pulse  mt-1.5 h-3 w-4/5  bg-slate-800/40" />
        </div>
    </div>
);

export const SearchFilterSkeleton = () => (
    <div className="relative z-20 mb-10 grid gap-6 rounded-xl border border-cyan-500/10 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center">
        <div className="animate-pulse h-[46px] w-full rounded-xl bg-slate-800/80" />

        <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex gap-2 rounded-xl border border-slate-700/50 p-1 bg-slate-950/30">
                <div className="animate-pulse h-[42px] w-[88px] rounded-xl bg-slate-800/80" />
                <div className="w-px bg-slate-700/50 my-1" />
                <div className="animate-pulse h-[42px] w-[88px] rounded-xl bg-slate-800/80" />
            </div>
            <div className="animate-pulse h-[42px] w-44 rounded-xl bg-slate-800/80" />
        </div>
    </div>
);

export const CountryCardSkeleton = () => (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur">
        <div className="animate-pulse h-44 w-full outline-none bg-slate-800/80" />
        <div className="space-y-2 p-5 flex flex-col">
            <div className="animate-pulse  bg-slate-800/70 h-7 w-3/4" />
            <div className="animate-pulse h-5 w-5/6 bg-slate-800/60" />
            <div className="animate-pulse h-5 w-4/6 bg-slate-800/60" />
            <div className="animate-pulse h-5 w-full bg-slate-800/60" />
            <div className="animate-pulse mt-3 h-10 w-fit px-4 py-2 rounded-full border border-cyan-500/10 bg-slate-800/50 min-w-[140px]" />
        </div>
    </div>
);

export const WonderCardSkeleton = () => (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur flex flex-col lg:flex-row">
        <div className="relative overflow-hidden lg:w-1/2 shrink-0">
            <div className="animate-pulse h-full min-h-[16rem] w-full min-w-[10rem] -none bg-slate-800/60" />
        </div>
        <div className="flex flex-col justify-between lg:w-1/2 p-5">
            <div className="space-y-2">
                <div className="animate-pulse  bg-slate-800/70 h-5 w-3/4" />
                <div className="animate-pulse  h-3 w-full bg-slate-800/60" />
                <div className="animate-pulse  h-3 w-5/6 bg-slate-800/60" />
                <div className="animate-pulse  h-3 w-4/6 bg-slate-800/60" />
                <div className="animate-pulse  h-3 w-full bg-slate-800/60" />
                <div className="animate-pulse  h-3 w-3/4 bg-slate-800/60" />
                <div className="animate-pulse  h-3 w-4/6 bg-slate-800/60" />
            </div>
            <div className="mt-4">
                <div className="animate-pulse h-9 w-32 rounded-full border border-cyan-300/20 bg-cyan-400/5" />
            </div>
        </div>
    </div>
);

export const HomeSkeleton = () => (
    <div className="pb-8">
        <HeroSectionSkeleton />
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="my-10 flex items-center flex-col text-center justify-center gap-4">
                <div className="animate-pulse  bg-slate-800/70h-[50px] w-[50px] " />
                <div className="animate-pulse  bg-slate-800/70h-10 w-80 max-w-full" />
            </div>
            <div className="relative mx-auto mt-16 max-w-7xl">
                <div className="space-y-16 md:space-y-24 w-full">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`relative flex items-start w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                <div className="hidden w-1/2 md:block" />
                                <div className={`w-full md:w-1/2 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-14' : 'md:pl-12 lg:pl-14'}`}>
                                    <WonderCardSkeleton />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    </div>
);

export const AboutSkeleton = () => (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
            <div className="animate-pulse  bg-slate-800/70 mx-auto h-12 w-3/4 max-w-md" />
            <div className="animate-pulse mx-auto mt-4 h-6 w-1/2 max-w-sm bg-slate-800/60" />
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

            <div className="animate-pulse  bg-slate-800/70 mb-8 mx-auto h-10 w-80 rounded-lg" />

            <div className="relative z-10 mb-6 flex justify-end">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="animate-pulse h-5 w-24 bg-slate-800/60" />
                    <div className="animate-pulse h-[40px] w-[70px] rounded-xl border border-cyan-500/10 bg-slate-800/85" />
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <CountryCardSkeleton key={i} />
                ))}
            </div>

            <div className="mt-14 mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:flex-wrap sm:gap-5">
                <div className="animate-pulse  bg-slate-800/70h-10 w-10 shrink-0 -full" />
                <div className="flex w-full max-w-full items-center justify-center gap-1.5 overflow-x-auto pb-2 sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:pb-0">
                    <div className="h-10 w-10 rounded-full bg-slate-800/70" />

                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-slate-800/70" />
                    ))}
                    <span className="px-1 text-slate-700">...</span>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={`e-${i}`} className="h-8 w-8 rounded-full bg-slate-800/70" />
                    ))}
                    <div className="h-10 w-10 rounded-full bg-slate-800/70" />

                </div>
                <div className="animate-pulse  bg-slate-800/70h-10 w-10 shrink-0 -full" />
            </div>
        </section>
    );
};

export const CountryDetailsSkeleton = () => (
    <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-8 sm:py-10">
        <div className="relative min-h-[100dvh] overflow-hidden bg-slate-900/90 p-0 sm:min-h-0 sm:-2xl sm:bg-transparent">
            <div className="animate-pulse ml-1 my-4 h-9 w-28 rounded-full bg-slate-800/85" />

            <div className="relative h-full min-h-[100dvh] w-full border-0 border-white/10 backdrop-blur sm:min-h-0 sm:-2xl sm:border sm:bg-slate-900/90 rounded-xl">
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 px-4 pb-8 pt-16 sm:px-8 sm:pt-8 sm:pb-10 sm:-t-2xl">
                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
                        <div className="flex flex-col items-center gap-4 lg:items-start">
                            <div className="animate-pulse w-full max-w-xs rounded-xl sm:max-w-sm h-48 sm:h-56" />
                            <div className="animate-pulse h-24 w-48 rounded-xl bg-slate-800/30 border border-slate-700/50" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="animate-pulse bg-slate-800/70 h-14 w-14" />
                                <div className="space-y-2 flex-1">
                                    <div className="animate-pulse bg-slate-800/70 h-10 w-64 max-w-full rounded-lg" />
                                    <div className="animate-pulse h-5 w-40 bg-slate-700/40" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 2 }).map((_, i) => (
                                    <div key={i} className="h-8 w-36 rounded-lg bg-slate-800/60 border border-slate-700/40" />
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="h-7 w-24 rounded-full bg-slate-700/50" />
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <div className="animate-pulse h-10 w-36 rounded-full bg-slate-800" />
                                <div className="animate-pulse h-10 w-40 rounded-full bg-slate-800" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 p-4 sm:p-6 lg:p-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="rounded-xl border border-slate-700/40 bg-slate-800/20 p-5">
                            <div className="animate-pulse bg-slate-800/70 h-6 w-48 mb-4" />
                            <div className="grid gap-0 sm:grid-cols-2">
                                {Array.from({ length: 4 }).map((_, j) => (
                                    <div key={j} className="flex items-center justify-between border-b border-slate-700/30 px-4 py-3">
                                        <div className="animate-pulse h-4 w-24 bg-slate-700/40" />
                                        <div className="animate-pulse h-4 w-32 bg-slate-700/30" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export const ContactSkeleton = () => (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="animate-pulse  bg-slate-800/70 mb-10 mx-auto h-10 w-48" />
        <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur">
                <div className="space-y-3">
                    <div className="animate-pulse h-[42px] rounded-xl bg-slate-800/80" />
                    <div className="animate-pulse h-[42px] rounded-xl bg-slate-800/80" />
                    <div className="animate-pulse min-h-40 rounded-xl bg-slate-800/80" />
                    <div className="animate-pulse h-12 w-28 rounded-full bg-slate-800/80" />
                </div>
            </div>
            <div className="h-[360px] overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-2 sm:h-[460px]">
                <div className="animate-pulse h-full w-full rounded-xl bg-slate-800/60" />
            </div>
        </div>
    </section>
);

export const MapPageSkeleton = () => (
    <section className="mx-auto w-full max-w-7xl px-3 pt-4 sm:px-4 lg:px-6">
        <div className="my-5 flex items-center gap-2">
            <div className="animate-pulse  bg-slate-800/70 h-7 w-7 rounded-full" />
            <div className="animate-pulse  bg-slate-800/70 h-8 w-64" />
        </div>
        <div className="relative h-[80vh] min-h-[280px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-md sm:h-[50vh] lg:h-[90vh] mb-10">
            <div className="animate-pulse h-full w-full rounded-xl bg-slate-800/40" />
        </div>
    </section>
);

export const WonderDetailsSkeleton = () => (
    <section className="mx-auto max-w-6xl p-0 sm:px-6 lg:px-8 sm:py-8 bg-slate-900 sm:bg-transparent min-h-[100dvh] sm:min-h-0">
        <div className="animate-pulse mb-8 mt-5 ml-4 sm:ml-0 h-9 w-24 rounded-full bg-slate-800/85" />

        <div className="relative overflow-hidden sm:rounded-xl border-0 sm:border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur-xl min-h-[100dvh] sm:min-h-0">
            <div className="animate-pulse h-72 w-full rounded-none sm:h-96 md:h-[450px] bg-slate-800/80" />

            <div className="p-6 sm:p-10">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="animate-pulse bg-slate-800/70 h-6 w-6 " />
                                <div className="animate-pulse bg-slate-800/70 h-7 w-48" />
                            </div>
                            <div className="space-y-2">
                                <div className="animate-pulse h-5 w-full bg-slate-800/60" />
                                <div className="animate-pulse h-5 w-full bg-slate-800/60" />
                                <div className="animate-pulse h-5 w-3/4 bg-slate-800/60" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="animate-pulse  bg-slate-800/70 h-6 w-6 " />
                                <div className="animate-pulse  bg-slate-800/70 h-7 w-52" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="flex items-start gap-4 rounded-xl border border-slate-700/40 bg-slate-800/30 p-4">
                                        <div className="animate-pulse  bg-slate-800/70 mt-1 h-8 w-8 shrink-0 rounded-xl" />
                                        <div className="flex-1 space-y-1.5">
                                            <div className="animate-pulse  h-4 w-full bg-slate-800/60" />
                                            <div className="animate-pulse  h-4 w-4/5 bg-slate-800/40" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/10 p-6 shadow-inner">
                            <div className="animate-pulse bg-slate-800/70mb-5 h-6 w-36" />
                            <div className="space-y-4">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="flex justify-between border-b border-slate-700/50 pb-3">
                                        <div className="animate-pulse h-4 w-16 bg-slate-800/40" />
                                        <div className="animate-pulse h-4 w-24 bg-slate-800/60" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6">
                            <div className="animate-pulse bg-slate-800/70 mb-4 h-5 w-28" />
                            <div className="animate-pulse mb-2 h-3 w-full bg-slate-800/40" />
                            <div className="animate-pulse mb-6 h-3 w-4/5 bg-slate-800/40" />
                            <div className="animate-pulse h-11 w-48 rounded-full bg-slate-800/80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
