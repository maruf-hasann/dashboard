import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashboardCategory from "../Pages/Category/DashboardCategory";
import LanguagesDashboard from "../Pages/Languages/LanguagesDashboard";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <DashboardCategory/>
            }, {
                path: 'language',
                element:<LanguagesDashboard/>
            }
        ]
    }

])
