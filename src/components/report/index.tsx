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
      return {
        day: checkDay(new Date(day.date).getDay()),
      };
    });

    console.log(weatherResult);

    console.log(arrOfDays);

    let svgSelection = d3
      .select(_resizeRef.current)
      .append("svg")
      .attr("width", clientWidth)
      .attr("height", clientHeight)
      .style("border", "3px solid magenta");

    let scaleX = d3
      .scaleBand()
      .domain(arrOfDays?.map((d) => d.day) as Iterable<string>)
      .range([0, clientWidth - 100]);

    let scaleY = d3
      .scaleLinear()
      .domain([0, 50])
      .range([0, clientHeight - 100]);

    let axisL = d3.axisLeft(scaleY);
    let axisB = d3.axisBottom(scaleX);

    let G = svgSelection
      .append("g")
      .attr("transform", "translate(50," + (clientHeight - 90) + ")")
      .call(axisB);

    let G1 = svgSelection
      .append("g")
      .attr("transform", "translate(50,10)")
      .call(axisL)
      .append("path")
      .attr("d");

    // let line = d3
    //   .line()
    //   // @ts-ignore
    //   .y((d) => {
    //     // @ts-ignore
    //     return scaleY(d.date);
    //   });

    // // let degree = weatherResult?.forecast.forecastday.map((data) => {
    // //   return {
    // //     data: data.day.avgtemp_c,
    // //   };
    // // });

    // // svgSelection
    // //   .append("path")
    // //   .datum(degree)
    // //   .attr("stroke", "steelblue")
    // //   .attr("stroke-width", 1)
    // //   .attr("d");

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
