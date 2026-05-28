import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export const AppLayout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
        const canonicalUrl = window.location.origin + pathname;
        let link = document.querySelector("link[rel='canonical']");
        if (link) {
            link.setAttribute("href", canonicalUrl);
        } else {
            link = document.createElement("link");
            link.setAttribute("rel", "canonical");
            link.setAttribute("href", canonicalUrl);
            document.head.appendChild(link);
        }
    }, [pathname]);

    return <>
        <Toaster
            position="top-center"
            toastOptions={{
                style: {
                    background: '#1e293b',
                    color: '#ffffff',
                    border: '1px solid rgba(34, 211, 238, 0.2)'
                }
            }}
        />
        <div className="theme-shell relative min-h-screen overflow-x-hidden transition-colors duration-300">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>
}