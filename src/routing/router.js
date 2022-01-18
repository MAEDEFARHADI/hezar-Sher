import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import HomePage from "../pages/homePage";
import Fal from "../pages/fal";

function Router() {
    const {fal , home} = routes;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={home} element={<HomePage />} />
            <Route path={fal} element={<Fal />} />
        </Routes>
    </BrowserRouter>  
        );
}

export default Router;