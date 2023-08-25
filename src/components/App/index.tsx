import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

import browserRouter from "../../router/routes";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { Icons } from "../../constants/icons/icons";
import useSlide from "../../hooks/useSlide";

const App = () => {
  const { handleClick, IsClicked, ref } = useSlide();

  return (
    <DashboardWrapper>
      <div className="dashboard-wrapper">
        <div className="nav-wrapper">
          <SideNav clickHandler={handleClick} />
          <TopNav />
        </div>

        <div className={`page-body ${IsClicked ? "movein" : "moveout"}`}>
          <div className={`container-sm`} ref={ref}>
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

const DashboardWrapper = styled.div`
  .dashboard-wrapper {
    width: 100%;
    height: 100vh;

    border: 1px solid green;

    .nav-wrapper {
      width: 100%;
      border: 1px solid green;
      height: 10vh;
      display: flex;
    }

    .page-body {
      height: 100%;
      .container-sm {
        display: none;
      }

      .weather-info {
        width: 90%;
        height: 80%;
        border: 1px solid purple;
        margin-left: 14vh;
      }
    }

    @media screen and (max-width: 800px) {
      /* width: 40%; */

      .movein {
        animation: movein 0.2s ease-in-out;
      }

      .moveout {
        animation: moveout 0.2s ease-in-out;
        transform: translate(-31%);
      }

      @keyframes moveout {
        0% {
          transform: translate(-0%);
        }

        40% {
          transform: translate(-10%);
        }
        60% {
          transform: translate(-20%);
        }
        80% {
          transform: translate(-30%);
        }
        100% {
          transform: translate(-31%);
        }
      }

      @keyframes movein {
        0% {
          transform: translate(-31%);
        }

        40% {
          transform: translate(-30%);
        }
        60% {
          transform: translate(-20%);
        }
        80% {
          transform: translate(-10%);
        }
        100% {
          transform: translate(0%);
        }
      }
      .page-body {
        width: 100%;
        display: flex;
        .container-sm {
          display: flex;
          flex-direction: column;
          align-items: start;
          border: 1px solid #7070703e;
          width: 50%;
          height: 100%;

          .icons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
            margin-top: 2rem;

            p {
              margin: 10px;
            }
          }
        }

        .weather-info {
          margin-left: 0px;
        }
      }
    }
  }
`;
