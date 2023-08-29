import useResize from "./useResize";
import * as d3 from "d3";
import checkDay from "../components/utils/checkday";
import { useEffect } from "react";

type TParam = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
    };
  };
};

const useD3 = (param: TParam[] | undefined) => {
  const { ref, clientHeight, clientWidth } = useResize();
  const width = clientWidth;
  const height = clientHeight;

  const chart = () => {
    let data2: number[] = [];
    let date: string[] = [];
    let arr: string[] = [];

    let svgSelection = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width as number)
      .attr("height", height as number)
      .style("border", "1px solid red");

    let arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(width / 5);
    let pie = d3.pie();

    let groupSelection = svgSelection
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // @ts-ignore
    param?.map((data, i) => {
      date.push(data.date);
      data2.push(data.day.avgtemp_c);
    });

    let nestedGSelection = groupSelection
      .selectAll("arc")
      .data(pie(data2))
      .enter()
      .append("g");

    nestedGSelection
      .append("path")
      //   @ts-ignore
      .attr("d", arc)

      // @ts-ignore
      .attr("fill", (d, i) => {
        return d3.schemeSet3[i];
      });

    date.map((current) => {
      let myDate = new Date(current);
      arr.push(checkDay(myDate.getDay()) as string);
    });

    nestedGSelection
      .append("text")
      //   @ts-ignore
      .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")

      //   @ts-ignore
      .text((d, i) => {
        return `${arr[i].slice(0, 3)} ${d.data} c`;
      });

    // console.log(checkDay(myDate.getDay()));
  };

  useEffect(() => {
    chart();
    console.log(width);

    return () => {
      d3.select(ref.current).select("svg").remove();
    };
  });

  return {
    ref,
  };
};

export default useD3;
