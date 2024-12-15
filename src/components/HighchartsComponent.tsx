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
          `https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=${start}&end_date=${end}&daily=temperature_2m_max`
        );
        const json = await response.json();
        console.log(json)
        setData({
          keys: json.daily.time,
          values: json.daily.temperature_2m_max,
        });
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchTest();
  };
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

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
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default HighchartsComponent;
