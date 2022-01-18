import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import HomePage from "../pages/homePage";

function Router() {
    const { home} = routes;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={home} element={<HomePage />} />
        </Routes>
    </BrowserRouter>  
        );
}

export default Router;