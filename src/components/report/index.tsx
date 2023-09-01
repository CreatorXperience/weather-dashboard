import { useEffect, useState, useRef } from "react";
import { TOpenApiResponse } from "../../type";
import CountryCard from "../Card/countrycard";
import D3Timeline from "../D3Timeline";
import ReportsWrapper from "./reportwrapper";
import { fetchCountryList } from "../../services/axios";
import useLineChart from "../../hooks/useLineChart";
import * as d3 from "d3";
import useResize from "../../hooks/useResize";
import useHumidity from "../../hooks/useHumidityChart";

export type TReportProps = {
  weatherResult: TOpenApiResponse | null;
  loading: boolean;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Reports = ({ weatherResult, setTerm }: TReportProps) => {
  const { _resizeRef } = useLineChart(weatherResult);
  const { _humidResizeRef } = useHumidity(weatherResult);

  const { ref: _barRef, clientHeight, clientWidth } = useResize();

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
      .select(_barRef.current)
      .append("svg")
      .attr("width", clientWidth)
      .attr("height", clientHeight);

    let dataSet = [
      {
        data: 20,
        value: "friday",
      },
      {
        data: 40,
        value: "friday",
      },
      {
        data: 10,
        value: "friday",
      },
      {
        data: 30,
        value: "friday",
      },
    ];

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(dataSet, (d, i) => d.data),
      ] as Iterable<d3.NumberValue>)
      .range([0, clientHeight - 50]);

    let rect = svgSelection
      .selectAll("rect")
      .data(dataSet)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (i * clientWidth) / 10)
      .attr("y", (d, i) => clientHeight - yScale(d.data))
      .attr("width", clientWidth / 12)
      .attr("height", (d) => yScale(d.data))
      .style("fill", "#077ad8")
      .append("text")
      .text((d) => d.value)
      .style("color", "red");

    svgSelection
      .selectAll("text")
      .data(dataSet)
      .enter()
      .append("text")
      .text((d) => d.value)
      .attr("x", (d, i) => i * 80)
      .attr("y", (d, i) => clientHeight - 20 - yScale(d.data));

    return () => {
      d3.select(_barRef.current).select("svg").remove();
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

        <div className="stats-header">
          <div className="stats-title">Average 5 days humidity</div>
        </div>

        <div className="bar-stats" ref={_barRef}></div>
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
