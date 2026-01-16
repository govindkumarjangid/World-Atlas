import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";
import "./Responsive.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
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
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

export const App = () => {
  return <RouterProvider router={router} />
}