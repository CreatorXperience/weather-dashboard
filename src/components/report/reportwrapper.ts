import { styled } from "styled-components";

const ReportsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: 5px solid green;

  .reports-container {
    width: 50%;
    height: auto;
    border: 3px solid blue;

    .report-text {
      font-size: 26px;
      font-weight: 400;
      padding: 20px;
    }

    .card-wrapper {
      width: 96%;
      display: flex;
      flex-flow: column;
      align-items: start;
      justify-content: center;

      .report-card {
        position: relative;
        width: 80%;
        height: 450px;
        display: flex;
        border-radius: 80px;
        border-bottom-left-radius: 50px;
        margin: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        .slider-item {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          border: 1px solid red;
          transition: all 0.3s ease-in-out;

          .report-details {
            position: absolute;
            color: #ffffff;
            z-index: 2;

            margin: 10px;
            padding: 12px;

            .report-country {
              font-size: 22px;
              font-weight: 400;
            }
            .report-capital {
              font-size: 16px;
            }
          }

          .reports-section {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 70%;
            margin-top: 12px;
            border: 1px solid red;

            .report-temperature {
              width: 100%;
              height: 80%;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;

              .condition-text {
                color: #ffffff;
                font-size: 20px;
                font-weight: 500px;
                text-align: center;
              }

              .temp {
                font-size: 8rem;
                color: #ffffff;
                font-weight: 800px;
              }

              .temp-icon {
                margin-top: 60px;
                width: 200px;
                height: 200px;
              }

              .weather_icon {
                margin-top: 60px;
              }

              .other-reports {
                width: 80%;
                height: 100%;

                display: flex;

                .mini-cont {
                  width: 40%;
                  height: 100%;
                  padding: 5px;
                  display: flex;
                  flex-flow: column;
                  align-items: center;
                  padding: 12px;
                  color: white;
                  border-radius: 10px;
                  margin-left: -1px;
                  background-color: #00000069;
                }
              }
            }
          }
        }

        .slide-1 {
          background-image: url("https://i.pinimg.com/564x/34/78/64/347864d1599bda2612ac5e820fed3373.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }

        .slide-2 {
          background-image: url("https://i.pinimg.com/564x/1e/66/cc/1e66ccbd502806993650bcac7d733f95.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }

        .slide-3 {
          background-image: url("https://i.pinimg.com/564x/b8/76/2c/b8762c24f62677a3b10aed3aa7ec5192.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }

  .stats {
    width: 50%;
    height: auto;
    border: 3px solid red;
    background-color: #fffcfc;

    .stats-title {
      font-size: 26px;
      font-weight: 400;
    }

    .stats-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 12px 20px;

      /* --webkit-scrollbar {
        display: none;
      } */

      .stats-select {
        background-color: white;
        border: none;
        outline: none;
        font-size: 14px;
        width: 30%;

        option {
          border: 0.5px solid black;
          width: 20%;
          font-size: 12px;
        }
      }
    }

    .forecast-stats {
      width: 100%;
      height: 400px;
      border: 3px solid purple;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-flow: column;

    .reports-container {
      width: 100%;
      .card-wrapper {
        width: 100%;
        align-items: center;

        .report-card {
          width: 100%;
          height: 420px;

          .slider-item {
            .report-details {
              .report-country {
                font-size: 14px;
              }
            }

            .reports-section {
              .report-temperature {
                .other-reports {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  place-items: center;
                  grid-gap: 12px;

                  .mini-cont {
                    width: 100%;
                    margin: -10px;

                    .report-day {
                      font-size: 10px;
                    }
                  }
                }
                .temp {
                  font-size: 5rem;
                }
                .condition-text {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default ReportsWrapper;
