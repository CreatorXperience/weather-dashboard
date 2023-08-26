import { RouterProvider } from "react-router-dom";

import browserRouter from "../../router/routes";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { Icons } from "../../constants/icons/icons";
import useSlide from "../../hooks/useSlide";
import DashboardWrapper from "./DashboardWrapper";

const App = () => {
  const { handleClick, IsClicked, ref } = useSlide();

  return (
    <DashboardWrapper>
      <div className="dashboard-wrapper">
        <div className="nav-wrapper">
          <SideNav clickHandler={handleClick} />
          <TopNav />
        </div>

        <div className={`page-body`}>
          <div
            className={`container-sm ${IsClicked ? " movein show" : "moveout"}`}
            ref={ref}
          >
            <div className="icons">{Icons.brand()}</div>
            <div className="icons">
              {Icons.homeIcon()} <p>Home</p>
            </div>
            <div className="icons">
              {Icons.reportIcon()} <p>Report</p>{" "}
            </div>
            <div className="icons">
              {Icons.profileIcon()} <p>Profile</p>
            </div>
            <div className="icons">
              {Icons.settingsIcon()} <p>Settings</p>
            </div>
          </div>

          <div className="weather-info">
            <RouterProvider router={browserRouter} />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default App;
