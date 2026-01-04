import { Route } from "react-router-dom";
import About from "../pages/misc/About";
import Terms from "../pages/misc/Terms";
import Privacy from "../pages/misc/Privacy";

export function MiscRoutes() {
    return (
        <>
            <Route path="about" element={<About />} />
            <Route path="terms-of-service" element={<Terms />} />
            <Route path="privacy-policy" element={<Privacy />} />
        </>
    );
}
