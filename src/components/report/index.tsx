import { useEffect, useState, useRef } from "react";
import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";
import D3Timeline from "../D3Timeline";
import ReportsWrapper from "./reportwrapper";
import { fetchCountryList } from "../../services/axios";
import useLineChart from "../../hooks/useLineChart";
import * as d3 from "d3";
import useResize from "../../hooks/useResize";

export type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Reports = ({ weatherResult, setTerm }: TReportProps) => {
  const { _resizeRef } = useLineChart(weatherResult);
  const { ref: _humidResizeRef, clientHeight, clientWidth } = useResize();

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
    let svgSelection = d3
      .select(_humidResizeRef.current)
      .append("svg")
      .attr("width", clientWidth)
      .attr("height", clientHeight);

    let margin = { left: 20, right: 20, top: 20, bottom: 20 };
    let width = clientWidth - margin.left - margin.right;
    let height = clientHeight - margin.top - margin.bottom;

    let dataset5 = [
      {
        date: new Date(weatherResult?.forecast.forecastday[0].date as string),
        deg: weatherResult?.forecast.forecastday[0].day.avghumidity,
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[1].date as string),
        deg: weatherResult?.forecast.forecastday[1].day.avghumidity,
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[2].date as string),
        deg: weatherResult?.forecast.forecastday[2].day.avghumidity,
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[3].date as string),
        deg: weatherResult?.forecast.forecastday[3].day.avghumidity,
      },
      {
        date: new Date(weatherResult?.forecast.forecastday[4].date as string),
        deg: weatherResult?.forecast.forecastday[4].day.avghumidity,
      },
    ];

    console.log(dataset5);

    let xScale = d3
      .scaleTime()
      .domain(
        d3.extent(dataset5, (d) => d.date) as Iterable<Date | d3.NumberValue>
      )
      .range([0, width]);

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset5, (d) => d.deg)] as Iterable<d3.NumberValue>)
      .range([height - 50, 0]);

    let axisB = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(1))
      // @ts-ignore
      .tickFormat(d3.timeFormat("%a"));

    let axisL = d3.axisLeft(yScale);

    let topG = svgSelection
      .append("g")
      .attr("translate", `transform(${20},${margin.top} )`);
    // @ts-ignore
    topG
      .append("g")
      .attr("transform", `translate(${margin.left},${height})`)
      .call(axisB, 1)
      .call((g) => g.select(".domain").remove());

    topG
      .append("g")
      .attr("transform", `translate(${margin.left + 10},${margin.top + 30})`)
      .call(axisL)
      .call((g) => g.select(".domain").remove())
      .selectAll(".tick line")
      .attr("stroke-opacity", 0);

    const line = d3
      .line()
      .x((d) => {
        // @ts-ignore
        return xScale(d.date);
      })
      // @ts-ignore
      .y((d) => yScale(d.deg));

    topG
      .append("g")
      .attr("transform", `translate(${margin.left}, 20)`)
      .append("path")
      .datum(dataset5)
      .attr("stroke", "red")
      .attr("fill", "#F5F0FF")
      .attr("stroke-width", "1px")
      // @ts-ignore
      .attr("d", line);

    return () => {
      d3.select(_humidResizeRef.current).select("svg").remove();
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
          <div className="stats-title">Average 5 days temperature</div>
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

        <div className="stats-header">
          <div className="stats-title">Average 5 days humidity</div>
        </div>
        <div className="humidity-stats" ref={_humidResizeRef}></div>
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
