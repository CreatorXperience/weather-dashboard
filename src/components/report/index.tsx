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

  const d3TimeLine = () => {
    let arrOfDays = weatherResult?.forecast.forecastday.map((day) => {
      return checkDay(new Date(day.date).getDay());
    });

    const margin = {
      top: 40,
      right: 40,
      left: 40,
      bottom: 40,
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

    let axisL = d3.axisLeft(yScale).tickPadding(8);

    let axisB = d3
      .axisBottom(xScale)
      .ticks(d3.timeDay.every(1))
      // @ts-ignore
      .tickFormat(d3.timeFormat("%a"));

    groupSelection
      .append("g")
      .style("font-size", "12px")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(axisL)
      .call((g) => g.selectAll(".domain").remove())
      .selectAll(".tick line")
      .attr("stroke-opacity", 0);

    groupSelection
      .append("g")
      .style("font-size", "12px")
      .attr("transform", `translate(${margin.left - 40}, ${height})`)
      // @ts-ignore
      .call(axisB)
      .call((g) => g.select(".domain").remove())
      .selectAll(".tick line")
      .attr("stroke-opacity", 0);

    svgSelection.selectAll(".tick text").attr("fill", "#777");

    const line = d3
      .line()
      .x((d) => {
        // @ts-ignore
        return xScale(d.date);
      })
      .y((d) => {
        // @ts-ignore
        return yScale(d.temp);
      });

    groupSelection
      .append("g")
      .attr("transform", `translate(${margin.left - 5},0 )`)
      .append("path")
      .datum(dataset)
      .attr("stroke", "steelblue")
      .attr("fill", "#F5F0FF")
      .attr("stroke-width", 1)
      // @ts-ignore
      .attr("d", line);
  };

  useEffect(() => {
    d3TimeLine();
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
      </div>
    </ReportsWrapper>
  );
};

export default Reports;
