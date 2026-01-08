import { createBrowserRouter } from "react-router";
import App from "../App";
import { CompanyPage, HomePage, SearchPage } from "../Pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'company/:ticker', element: <CompanyPage /> },
        ]
    }
])

export default router
