import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { useParams } from "react-router-dom";
import HomePage from "../pages/homePage";
import Fal from "../pages/fal";
import Ganjine from "../pages/ganjine";
import Shaer from "../pages/shaer";
function Router() {
    const { id } = useParams();
    const {fal , home , ganjine , shaer} = routes;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={home} element={<HomePage />} />
            <Route path={fal} element={<Fal />} />
            <Route path={ganjine} element={<Ganjine />} />
            <Route path={`${shaer}/:id`} element={<Shaer />} />

        </Routes>
    </BrowserRouter>  
        );
}

export default Router;