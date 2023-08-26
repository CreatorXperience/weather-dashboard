import { Icons } from "../../constants/icons/icons";
import useSlider from "../../hooks/useSlider";

import { TOpenApiResponse } from "../../type";

type TProp = {
  data: TOpenApiResponse | null;
};

const CountryCard = ({ data }: TProp) => {
  const { $ref } = useSlider(3);
  const checkCondition = () => {
    if (data?.current.condition.text.includes("cloud")) {
      return Icons.cloudyIcon();
    } else if (data?.current.condition.text.includes("rain")) {
      return Icons.cloudyRainyIcon();
    } else {
      return Icons.cloudySunnyIcon();
    }
  };

  return (
    <div className="report-card slider-container" ref={$ref}>
      <div className="slider-item slide-1">
        <div className="report-details">
          <div className="report-country">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffffff;" }}
            >
              {" "}
            </i>
            {data?.location.region}
          </div>
          <div className="report-capital">{data?.location.tz_id}</div>
        </div>

        <div className="reports-section">
          <div className="report-temperature">
            <div className="weather_icon">{checkCondition()}</div>
            <div className="condition-text">{data?.current.condition.text}</div>

            <div className="temp">
              {Math.floor(data?.current.temp_c as number)}&deg;c
            </div>

            <div className="other-reports">
              <div className="mini-cont">
                <div className="icon">{Icons.cloudySunnyIcon()}</div>
                <div className="other-text">20&deg;c</div>
                <div className="report-day">Mon</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-item slide-2">
        <div className="report-details">
          <div className="report-country">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffffff;" }}
            >
              {" "}
            </i>
            {data?.location.region}
          </div>
          <div className="report-capital">{data?.location.tz_id}</div>
        </div>
      </div>

      <div className="slider-item slide-3">
        <div className="report-details">
          <div className="report-country">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffffff;" }}
            >
              {" "}
            </i>
            {data?.location.region}
          </div>
          <div className="report-capital">{data?.location.tz_id}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
