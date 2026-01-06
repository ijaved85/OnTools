/*import { Route } from "react-router-dom";

// Import Finance Pages
import GSTCalculator from "../pages/finance/GSTCalculator/GSTCalculator";
import EMICalculator from "../pages/finance/EMICalculator/EMICalculator";


export const FinanceRoutes = () => (
    <>
        <Route path="/gst-calculator" element={<GSTCalculator />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
    </>
);
*/

import { Route } from "react-router-dom";

// Import Finance Pages
import GSTCalculator from "../pages/finance/GSTCalculator/GSTCalculator";
import AgeCalculator from "../pages/finance/AgeCalculator/AgeCalculator";

export const FinanceRoutes = () => (
    <>
        <Route path="/gst-calculator" element={<GSTCalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
    </>
);
