import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";

const HighchartsComponent: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null); // Начальная дата
  const [endDate, setEndDate] = useState<Date | null>(null); // Конечная дата
  const [data, setData] = useState({ keys: [], values: [] }); // Данные из API
  const [error, setError] = useState<string | null>(null); // Ошибка, если запрос не удался

  const handleFetchData = async () => {
    if (!startDate || !endDate) {
      setError("Пожалуйста, выберите обе даты.");
      return;
    }
    const start = startDate.toISOString().split("T")[0]; // Формат YYYY-MM-DD
    const end = endDate.toISOString().split("T")[0];
    console.log(start, end);
    const fetchTest = async () => {
      try {
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`,
          {
            cache: "no-cache",
            headers: { "cache-control": "no-cache" },
          }
        );
        const json = await response.json();
        setData({
          keys: Object.keys(json.bpi),
          values: Object.values(json.bpi),
        });
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTest();
  };

  // useEffect(() => {
  //   const fetchTest = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.coindesk.com/v1/bpi/historical/close.json?start=2024-10-12&end=2024-10-19"
  //       );
  //       const json = await response.json();
  //       setData({
  //         keys: Object.keys(json.bpi),
  //         values: Object.values(json.bpi),
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchTest();
  // }, []);

  // const [data, setData] = useState({ keys: [], values: [] });
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
    // <div>
    //   <HighchartsReact highcharts={Highcharts} options={options} />
    // </div>
    <>
      <div style={{ padding: "20px" }}>
        <h1>Выберите даты для данных о ценах на биткоин</h1>
        <div style={{ marginBottom: "10px" }}>
          <label>Начальная дата: </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Выберите начальную дату"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Конечная дата: </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Выберите конечную дату"
          />
        </div>
        <button onClick={handleFetchData}>Получить</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data && (
          <div>
            <h2>Результаты:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default HighchartsComponent;
