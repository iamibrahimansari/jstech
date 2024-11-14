import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
