import useCard from "../../hooks/useCard";
import useSlider from "../../hooks/useSlider";

import type { TProp } from "../../type";

const CountryCard = ({ data }: TProp) => {
  const { $ref } = useSlider(3);

  const { checkCondition, mapForecast } = useCard();

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
            <div className="weather_icon">
              {checkCondition(data?.current.condition.text as string)}
            </div>
            <div className="condition-text">{data?.current.condition.text}</div>

            <div className="temp">
              {Math.floor(data?.current.temp_c as number)}&deg;c
            </div>

            <div className="other-reports">{mapForecast(data)}</div>
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
