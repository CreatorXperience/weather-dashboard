import { useEffect, useState, useRef } from "react";
import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";
import D3Timeline from "../D3Timeline";
import ReportsWrapper from "./reportwrapper";
import { fetchCountryList } from "../../services/axios";
import * as d3 from "d3";
import useResize from "../../hooks/useResize";
import checkDay from "../utils/checkday";

type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Reports = ({ weatherResult, setTerm }: TReportProps) => {
  const { clientHeight, clientWidth, ref: _resizeRef } = useResize();

  const ref = useRef<HTMLSelectElement | null>(null);

  const [countryList, setCountryList] = useState<
    { country: string; iso2: string }[] | null
  >(null);

  const handleGetCountry = (e: React.MouseEvent<HTMLSelectElement>) => {
    setTerm(ref.current?.value as string);
  };

  const mapContent = () => {
    let options = countryList?.map((country) => {
      return (
        <option key={country.iso2} value={country.country}>
          {country.country}
        </option>
      );
    });

    return options;
  };

  useEffect(() => {
    let arrOfDays = weatherResult?.forecast.forecastday.map((day) => {
      return checkDay(new Date(day.date).getDay());
    });

    const margin = {
      top: 20,
      right: 20,
      left: 20,
      bottom: 20,
    };

    let width = clientWidth - margin.left - margin.right;
    let height = clientHeight - margin.top - margin.bottom;
    //   console.log(weatherResult);

    //   console.log(arrOfDays);

    let xScale = d3.scaleTime().range([0, width]);
    let yScale = d3.scaleLinear().range([height, 0]);

    let svgSelection = d3
      .select(_resizeRef.current)
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .style("border", "3px solid magenta");

    let groupSelection = svgSelection
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    let dataset2 = weatherResult?.forecast.forecastday.map((data) => {
      return {
        date: new Date(data.date),
        temp: data.day.avgtemp_c,
      };
    });

    console.log(dataset2);
    let dataset = [
      {
        date: new Date(weatherResult?.forecast.forecastday[0].date as string),
        temp: new Date(
          weatherResult?.forecast.forecastday[0].day.avgtemp_c as number
        ),
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[1].date as string),
        temp: new Date(
          weatherResult?.forecast.forecastday[1].day.avgtemp_c as number
        ),
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[2].date as string),
        temp: new Date(
          weatherResult?.forecast.forecastday[2].day.avgtemp_c as number
        ),
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[3].date as string),
        temp: new Date(
          weatherResult?.forecast.forecastday[3].day.avgtemp_c as number
        ),
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[4].date as string),
        temp: new Date(
          weatherResult?.forecast.forecastday[4].day.avgtemp_c as number
        ),
      },

      // { date: new Date(1, 5, 2016), temp: 40000 },
      // { date: new Date(1, 6, 2016), temp: 40000 },
      // { date: new Date(1, 7, 2016), temp: 40000 },
      // { date: new Date(1, 8, 2016), temp: 40000 },
    ];
    console.log(dataset),
      xScale.domain(
        d3.extent(dataset, (d) => {
          return d.date;
        }) as Iterable<Date | d3.NumberValue>
      );

    yScale.domain([
      0,
      d3.max(dataset, (d) => d.temp),
    ] as Iterable<d3.NumberValue>);

    let axisL = d3.axisLeft(yScale);

    let axisB = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(1))
      .tickFormat(d3.timeFormat("%a"));

    groupSelection
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(axisL);

    groupSelection
      .append("g")
      .attr("transform", `translate(${margin.left}, ${height})`)
      .call(axisB);

    const line = d3
      .line()
      .x((d) => {
        return xScale(d.date);
      })
      .y((d) => {
        return yScale(d.temp);
      });

    groupSelection
      .append("path")
      .datum(dataset)
      .attr("stroke", "steelblue")
      .attr("fill", "none")
      .attr("stroke-width", 1)
      .attr("d", line);

    return () => {
      d3.select(_resizeRef.current).select("svg").remove();
    };
  });

  useEffect(() => {
    const Fetcher = async () => {
      const data = await fetchCountryList();
      console.log(data);
      setCountryList(data);
    };

    Fetcher();
  }, []);

  return (
    <ReportsWrapper>
      <div className="reports-container">
        <div className="report-text">Weather Reports</div>
        <div className="card-wrapper">
          <CountryCard data={weatherResult} />
        </div>

        <div className="report-text">Current 5 Days Forecast</div>

        <D3Timeline chartData={weatherResult?.forecast.forecastday} />
      </div>
      <div className="stats">
        <div className="stats-header">
          <div className="stats-title">Statistics</div>
          <select
            className="stats-select"
            ref={ref}
            onClick={(e) => handleGetCountry(e)}
          >
            <option value="Select country">Select country</option>
            {mapContent()}
          </select>
        </div>

        <div className="forecast-stats" ref={_resizeRef}></div>
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
