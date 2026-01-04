import { Routes } from "react-router-dom";
import { FinanceRoutes } from "./FinanceRoutes";
import { MiscRoutes } from "./MiscRoutes";

function MainRoutes() {
  return (
 
    <Routes>
      {FinanceRoutes()}
      {MiscRoutes()}

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default MainRoutes;
