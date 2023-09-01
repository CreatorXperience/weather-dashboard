import { useEffect } from "react";
import * as d3 from "d3";
import { TOpenApiResponse } from "../type";
import useResize from "./useResize";

const useHumidity = (weatherResult: TOpenApiResponse | null) => {
  const { ref: _humidResizeRef, clientHeight, clientWidth } = useResize();
  const drawChart = () => {
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
  };

  const removeChart = () => {
    d3.select(_humidResizeRef.current).select("svg").remove();
  };
  useEffect(() => {
    drawChart();
    return () => {
      removeChart();
    };
  });

  return {
    _humidResizeRef,
  };
};

export default useHumidity;
