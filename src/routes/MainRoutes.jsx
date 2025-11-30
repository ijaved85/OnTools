import { Routes } from "react-router-dom";
import { FinanceRoutes } from "./FinanceRoutes";

function MainRoutes() {
  return (
    <Routes>
      {FinanceRoutes()}
    </Routes>
  );
}

export default MainRoutes;