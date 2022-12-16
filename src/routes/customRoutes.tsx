import { Route, Routes } from "react-router-dom";
import Header from "../layout/header/Header";
import routes from "./routeList";

const CustomRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, exact, component }) => {
          return (
            <Route
              path={path}
              key={path}
              element={
                <>
                  {path === "/login" ||
                  path === "/register" ||
                  path === "/verification" ? (
                    component
                  ) : (
                    <>
                      <Header />
                      {component}
                    </>
                  )}
                </>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default CustomRoutes;
