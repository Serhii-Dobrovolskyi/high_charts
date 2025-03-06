import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export type TChartType = "line" | "area" | "spline";
type TChartProps = {
  data: { keys: string[]; values: number[] };
  name: string;
  color: string;
  type: TChartType;
};

const Chart: React.FC<TChartProps> = ({ data, name, color, type }) => {
  const options: Highcharts.Options = {
    chart: {
      type,
    },
    title: {
      text: name,
    },
    Axxis: {
      categories: data.keys,
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Data",
        data: data.values,
        type,
        color,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
