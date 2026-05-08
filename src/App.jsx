import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Loader } from "lucide-react";

const LoadingFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <Loader className="animate-spin text-cyan-500" size={40} />
  </div>
);

const Home = lazy(() => import("./Pages/Home").then(m => ({ default: m.Home || m.default })));
const About = lazy(() => import("./Pages/About").then(m => ({ default: m.About || m.default })));
const Country = lazy(() => import("./Pages/Country").then(m => ({ default: m.Country || m.default })));
const Contact = lazy(() => import("./Pages/Contact").then(m => ({ default: m.Contact || m.default })));
const MapPage = lazy(() => import("./Pages/MapPage"));
const WonderDetails = lazy(() => import("./Pages/WonderDetails").then(m => ({ default: m.WonderDetails || m.default })));
const Errorpage = lazy(() => import("./Components/UI/ErrorPage").then(m => ({ default: m.Errorpage || m.default })));
const CountryDetails = lazy(() => import("./Components/Layout/CountryDetails").then(m => ({ default: m.CountryDetails || m.default })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Suspense fallback={<LoadingFallback />}><Errorpage /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<LoadingFallback />}><Home /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<LoadingFallback />}><About /></Suspense>
      },
      {
        path: "/country",
        element: <Suspense fallback={<LoadingFallback />}><Country /></Suspense>
      },
      {
        path: "/country/:id",
        element: <Suspense fallback={<LoadingFallback />}><CountryDetails /></Suspense>
      },
      {
        path: "/wonders/:id",
        element: <Suspense fallback={<LoadingFallback />}><WonderDetails /></Suspense>
      },
      {
        path: "/map",
        element: <Suspense fallback={<LoadingFallback />}><MapPage /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<LoadingFallback />}><Contact /></Suspense>
      }
    ]
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}