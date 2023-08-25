import { Icons } from "../../constants/icons/icons";
import { TOpenApiResponse } from "../../type";

type TProp = {
  data: TOpenApiResponse | null;
};

const CountryCard = ({ data }: TProp) => {
  return (
    <div className="report-card">
      <div className="report-details">
        <div className="report-country">
          <i className="fa-solid fa-location-dot" style={{ color: "#ffffff;" }}>
            {" "}
          </i>
          {data?.location.region}
        </div>
        <div className="report-capital">{data?.location.tz_id}</div>
      </div>

      <div className="reports-section">
        <div className="report-temperature">
          <div className="weather_icon">{Icons.cloudyIcon()}</div>
          <div>{data?.current.condition.text}</div>

          <div className="temp">{data?.current.cloud}&deg;c</div>

          <div className="other-reports">
            <div className="mini-cont">
              <div className="icon">{Icons.cloudySunnyIcon()}</div>
              <div className="other-text">20&deg;c</div>
              <div className="report-day">Mon</div>
            </div>
            <div className="mini-cont">
              <div className="icon">{Icons.cloudySunnyIcon()}</div>
              <div className="other-text">20&deg;c</div>
              <div className="report-day">Mon</div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="https://i.pinimg.com/564x/05/0f/06/050f06cc78f2eefba57dc19cee242250.jpg" /> */}
    </div>
  );
};

export default CountryCard;
