import { styled } from "styled-components";

const DashboardWrapper = styled.div`
  .dashboard-wrapper {
    width: 100%;
    height: 100%;
    /* border: 1px solid green; */

    .nav-wrapper {
      width: 100%;
      /* border: 1px solid green; */
      height: 10vh;
    }

    .page-body {
      height: 100%;
      .container-sm {
        display: none;
      }

      .weather-info {
        width: 90%;
        height: 80%;
        /* border: 1px solid purple; */
        margin-left: 14vh;
      }
    }

    @media screen and (max-width: 800px) {
      /* width: 40%; */

      .movein {
        animation: movein 0.2s ease-in-out;
      }

      .show {
        display: block;
      }

      .hide {
        display: none;
      }

      .moveout {
        animation: moveout 0.2s ease-in-out;
        transform: translate(-100%);
      }

      @keyframes moveout {
        0% {
          transform: translate(-0%);
        }

        40% {
          transform: translate(-20%);
        }
        60% {
          transform: translate(-40%);
        }
        80% {
          transform: translate(-80%);
        }
        100% {
          transform: translate(-100%);
        }
      }

      @keyframes movein {
        0% {
          transform: translate(-100%);
        }

        40% {
          transform: translate(-80%);
        }
        60% {
          transform: translate(-40%);
        }
        80% {
          transform: translate(-20%);
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
          /* border: 1px solid #7070703e; */
          width: 50%;
          position: fixed;
          z-index: 5;
          background-color: white;
          padding: 12px;
          height: 100vh;

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
          width: 100%;
          margin-left: 0px;
          /* border: 3px solid red; */
        }
      }
    }
  }
`;

export default DashboardWrapper;
