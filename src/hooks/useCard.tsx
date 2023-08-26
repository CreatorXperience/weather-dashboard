import { Icons } from "../constants/icons/icons";
import type { TOpenApiResponse, TProp } from "../type";

const useCard = () => {
  const checkCondition = (condition: string | undefined) => {
    if (condition && condition.includes("cloud")) {
      return Icons.cloudyIcon();
    } else if (condition && condition.includes("rain")) {
      return Icons.cloudyRainyIcon();
    } else {
      return Icons.cloudySunnyIcon();
    }
  };

  const checkDay = (day: number) => {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  };

  const mapForecast = (content: TOpenApiResponse | null) => {
    return content?.forecast.forecastday.map((item) => {
      let forecastDate = new Date(item.date);
      return (
        <div className="mini-cont" key={item.date}>
          <div className="icon">
            {checkCondition(item.day.condition.text as string)}
          </div>
          <div className="other-text">{item.day.avgtemp_c}&deg;c</div>
          <div className="report-day">{checkDay(forecastDate.getDay())}</div>
        </div>
      );
    });
  };

  return {
    checkCondition,
    checkDay,
    mapForecast,
  };
};

export default useCard;
