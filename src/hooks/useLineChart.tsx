import { TOpenApiResponse } from "../type";
import useResize from "./useResize";
import * as d3 from "d3";
import { useEffect } from "react";

const useLineChart = (result: TOpenApiResponse | null) => {
  const { clientHeight, clientWidth, ref: _resizeRef } = useResize();

  const d3TimeLine = () => {
    const margin = {
      top: 40,
      right: 40,
      left: 40,
      bottom: 40,
    };

    let width = clientWidth - margin.left - margin.right;
    let height = clientHeight - margin.top - margin.bottom;
    //   console.log(result);

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

    let dataset = [
      {
        date: new Date(result?.forecast.forecastday[0].date as string),
        temp: new Date(result?.forecast.forecastday[0].day.avgtemp_c as number),
      },
      {
        date: new Date(result?.forecast.forecastday[1].date as string),
        temp: new Date(result?.forecast.forecastday[1].day.avgtemp_c as number),
      },
      {
        date: new Date(result?.forecast.forecastday[2].date as string),
        temp: new Date(result?.forecast.forecastday[2].day.avgtemp_c as number),
      },
      {
        date: new Date(result?.forecast.forecastday[3].date as string),
        temp: new Date(result?.forecast.forecastday[3].day.avgtemp_c as number),
      },
      {
        date: new Date(result?.forecast.forecastday[4].date as string),
        temp: new Date(result?.forecast.forecastday[4].day.avgtemp_c as number),
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

  return {
    d3TimeLine,
    _resizeRef,
  };
};

export default useLineChart;
