import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import MapPage from "./Pages/MapPage";
import { WonderDetails } from "./Pages/WonderDetails";
import { Errorpage } from "./Components/UI/ErrorPage";
import { CountryDetails } from "./Components/Layout/CountryDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/country",
        element: <Country />,

      },
      {
        path: "/country/:id",
        element: <CountryDetails />
      },
      {
        path: "/wonders/:id",
        element: <WonderDetails />
      },
      {
        path: "/map",
        element: <MapPage />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
}