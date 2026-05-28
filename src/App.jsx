import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppLayout } from "./Components/Layout/AppLayout";
import LoadingFallback from "./Components/UI/LoadingFallback";
import {
  HomeSkeleton,
  AboutSkeleton,
  CountryPageSkeleton,
  CountryDetailsSkeleton,
  MapPageSkeleton,
  ContactSkeleton,
  WonderDetailsSkeleton
} from "./Components/UI/Skeletons";

const Home = lazy(() => import("./Pages/Home")
  .then(m => ({ default: m.Home || m.default })));
const About = lazy(() => import("./Pages/About")
  .then(m => ({ default: m.About || m.default })));
const Country = lazy(() => import("./Pages/Country")
  .then(m => ({ default: m.Country || m.default })));
const Contact = lazy(() => import("./Pages/Contact")
  .then(m => ({ default: m.Contact || m.default })));
const MapPage = lazy(() => import("./Pages/MapPage"));
const WonderDetails = lazy(() => import("./Pages/WonderDetails")
  .then(m => ({ default: m.WonderDetails || m.default })));
const Errorpage = lazy(() => import("./Components/UI/ErrorPage")
  .then(m => ({ default: m.Errorpage || m.default })));
const CountryDetails = lazy(() => import("./Components/Layout/CountryDetails")
  .then(m => ({ default: m.CountryDetails || m.default })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Suspense fallback={<LoadingFallback />}><Errorpage /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<HomeSkeleton />}><Home /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<AboutSkeleton />}><About /></Suspense>
      },
      {
        path: "/country",
        element: <Suspense fallback={<CountryPageSkeleton />}><Country /></Suspense>
      },
      {
        path: "/country/:id",
        element: <Suspense fallback={<CountryDetailsSkeleton />}><CountryDetails /></Suspense>
      },
      {
        path: "/wonders/:id",
        element: <Suspense fallback={<WonderDetailsSkeleton />}><WonderDetails /></Suspense>
      },
      {
        path: "/map",
        element: <Suspense fallback={<MapPageSkeleton />}><MapPage /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<ContactSkeleton />}><Contact /></Suspense>
      }
    ]
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}