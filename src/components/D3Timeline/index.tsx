import { useEffect } from "react";
import * as d3 from "d3";
import { styled } from "styled-components";
import useResize from "../../hooks/useResize";

type TChartData = {
  chartData:
    | {
        date: string;
        day: {
          avgtemp_c: number;
          condition: {
            text: string;
          };
        };
      }[]
    | undefined;
};

type Tdata = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
    };
  };
};
const D3Timeline = ({ chartData }: TChartData) => {
  const { ref, clientHeight, clientWidth } = useResize();

  const width = clientWidth;
  const height = clientHeight;

  const chart = () => {
    let data2: number[] = [];
    let svgSelection = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width as number)
      .attr("height", height as number)
      .style("border", "1px solid red");

    let arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(width / 6);
    let pie = d3.pie();

    let groupSelection = svgSelection
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    chartData?.map((data, i) => {
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
      .attr("fill", (d, i) => {
        return d3.schemeSet3[i];
      });

    nestedGSelection
      .append("text")
      //   @ts-ignore
      .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
      //   @ts-ignore
      .text((d) => d.data);
  };

  useEffect(() => {
    chart();
    console.log(width);

    return () => {
      d3.select(ref.current).select("svg").remove();
    };
  });

  return (
    <D3Wrapper>
      <div ref={ref} className="d3-container"></div>
    </D3Wrapper>
  );
};

export default D3Timeline;

const D3Wrapper = styled.div`
  width: 100%;
  .d3-container {
    width: 100%;
    height: 400px;
    border: 3px solid green;
    display: flex;
  }
`;
