import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const HighchartsComponent: React.FC = () => {
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/historical/close.json?start=2024-10-12&end=2024-10-19"
        );
        const json = await response.json();
        setData({keys:Object.keys(json.bpi),values:Object.values(json.bpi)})
      } catch (err) {
        console.log(err);
      }
    };
    fetchTest();
  }, []);

  const [data, setData] = useState({keys:[],values:[]});
  const seriesOption: SeriesOptionsType = {
    name: "Продажи",
    data: data.values,
    type: "line",
  };
  const options: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Динамический график",
    },
    xAxis: {
      categories: data.keys,
    },
    yAxis: {
      title: {
        text: "Значение",
      },
    },
    series: [seriesOption],
  };


  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsComponent;
