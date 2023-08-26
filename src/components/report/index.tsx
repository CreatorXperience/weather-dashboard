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
  width: 40%;
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
        height: 340px;

        border-radius: 15px;
        margin: 20px;
        background-image: url("https://i.pinimg.com/564x/0c/3f/c8/0c3fc8469ea75b07d1def1e836467398.jpg");
        background-repeat: no-repeat;
        background-size: cover;

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
            font-size: 12px;
          }
        }

        /* img {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 600px;
          border-radius: inherit;
        } */

        .reports-section {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          margin-top: 12px;
          background-color: #e98d0c29;
          backdrop-filter: blur(10px);
          border-radius: inherit;

          .report-temperature {
            width: 100%;
            height: 80%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            .temp {
              font-size: 4rem;
              color: #dedddd;
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
                width: 20%;
                height: 100%;
                padding: 5px;

                display: flex;
                flex-flow: column;
                align-items: center;
                color: white;
                border-radius: 10px;
                margin-left: 10px;
                background-color: #e4e4e43d;
                backdrop-filter: blur(20px);
              }
            }
          }
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
          height: 300px;

          .report-details {
            .report-country {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
