import { styled } from "styled-components";
import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";

type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
};
const Reports = ({ weatherResult, loading }: TReportProps) => {
  return (
    <ReportsWrapper>
      <div className="reports-container">
        <div className="report-text">Weather Reports</div>
        <div className="card-wrapper">
          <CountryCard data={weatherResult} />
        </div>
      </div>
    </ReportsWrapper>
  );
};

export default Reports;

const ReportsWrapper = styled.div`
  width: 60%;
  height: auto;

  .reports-container {
    width: 100%;
    height: auto;
    border: 3px solid blue;

    .report-text {
      font-size: 26px;
      font-weight: 400;
      padding: 20px;
    }

    .card-wrapper {
      width: 100%;
      display: flex;

      .report-card {
        position: relative;
        width: 80%;
        height: 400px;
        display: flex;
        border-radius: 80px;
        border-bottom-left-radius: 50px;
        margin: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        .dotted-cont {
          width: 20%;
          height: 100%;
          .dot {
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: #000000;
          }
        }

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
            /* background: linear-gradient(to right, #00000072, #000000fd);
            backdrop-filter: blur(10px);
            border-radius: 20px; */

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
                height: 200px;

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
                  margin-left: 10px;
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

  @media screen and (max-width: 800px) {
    width: 100%;

    .reports-container {
      width: 100%;
      .card-wrapper {
        .report-card {
          width: 100%;
          height: 320px;

          .slider-item {
            .report-details {
              .report-country {
                font-size: 14px;
              }
            }

            .reports-section {
              .report-temperature {
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
