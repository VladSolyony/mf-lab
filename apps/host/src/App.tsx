import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { loadRemotePage } from "./pages/remote";
import { lazy } from "react";
import { loadMainPage } from "./pages/main";

const LazyRemotePage = lazy(loadRemotePage);
const LazyMainPage = lazy(loadMainPage);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyMainPage />,
  },
  {
    path: '/remote',
    element: <LazyRemotePage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<RouterProvider router={router} />);