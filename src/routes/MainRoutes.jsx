import { Routes } from "react-router-dom";
import { FinanceRoutes } from "./FinanceRoutes";
import { HomeRoutes } from "./HomeRoutes";
import { MiscRoutes } from "./MiscRoutes";

function MainRoutes() {
  return (
 
    <Routes>
      {FinanceRoutes()}
      {HomeRoutes()}
      {MiscRoutes()}

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default MainRoutes;
