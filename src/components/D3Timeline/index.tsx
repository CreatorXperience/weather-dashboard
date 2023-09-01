import { styled } from "styled-components";
import useD3 from "../../hooks/useD3";

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

const D3Timeline = ({ chartData }: TChartData) => {
  let { ref } = useD3(chartData);

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
    height: 500px;
    /* border: 3px solid green; */
    display: flex;
    svg {
      font-size: 12px;
    }
  }
`;
