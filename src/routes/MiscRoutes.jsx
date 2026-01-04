import { Route } from "react-router-dom";
import Whatsapp from "../pages/misc/Whatsapp/Whatsapp";


export function MiscRoutes() {
    return (
        <>
            <Route path="whatsapp" element={<Whatsapp />} />
        </>
    );
}
