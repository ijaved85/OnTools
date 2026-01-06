import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Terms from "../pages/Home/Terms";
import Privacy from "../pages/Home/Privacy";

export function HomeRoutes() {
    return (
        <>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="terms-of-service" element={<Terms />} />
            <Route path="privacy-policy" element={<Privacy />} />
        </>
    );
}
