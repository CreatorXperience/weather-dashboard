import { styled } from "styled-components";

const DashboardWrapper = styled.div`
  .dashboard-wrapper {
    width: 100%;
    height: 100%;

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

export default DashboardWrapper;
