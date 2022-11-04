import { BrowserRouter, Router } from "react-router-dom";
import CustomRoutes from "./customRoutes";
import { createBrowserHistory } from "history";
import { useEffect } from "react";

const history = createBrowserHistory();

const Routes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
};

export { Routes, history };
