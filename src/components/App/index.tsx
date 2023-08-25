import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

import browserRouter from "../../router/routes";
import SideNav from "../SideNav";

const App = () => {
  return (
    <DashboardWrapper>
      <div className="dashboard-wrapper">
        <SideNav />
        <RouterProvider router={browserRouter} />
      </div>
    </DashboardWrapper>
  );
};

export default App;

const DashboardWrapper = styled.div`
  .dashboard-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    border: 1px solid green;
  }
`;
