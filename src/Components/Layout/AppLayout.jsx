import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export const AppLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0, {
            behavior: "smooth"
        });
    }, [pathname]);

    return <>
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                    background: '#1e293b',
                    color: '#fff',
                    border: '1px solid rgba(34, 211, 238, 0.2)'
                }
            }}
        />
        <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_15%_10%,#1f3b63_0,#0f172a_30%,#020617_65%),radial-gradient(circle_at_85%_90%,#1e293b_0,#020617_55%)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(30deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
            <div className="relative">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    </>
}