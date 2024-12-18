import { useContext, useState } from "react";
import { ChartsContext } from "../context/chartsContext";

export const useFetchChartData = () => {
  const [data, setData] = useState<
    Record<string, { keys: string[]; values: number[] }>
  >({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { charts } = useContext(ChartsContext);

  const fetchChartData = async (startDate: Date, endDate: Date) => {
    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];
    setIsLoading(true);
    setError(null);
    const dailyQuery = charts.map((i) => i.dataType).join(",");
    try {
      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=${start}&end_date=${end}&daily=${dailyQuery}`
      );
      const json = await response.json();
      const formattedData = {
        temperature_2m_max: {
          keys: json.daily.time,
          values: json.daily.temperature_2m_max,
        },
        temperature_2m_min: {
          keys: json.daily.time,
          values: json.daily.temperature_2m_min,
        },
        temperature_2m_mean: {
          keys: json.daily.time,
          values: json.daily.temperature_2m_mean,
        },
        apparent_temperature_max: {
          keys: json.daily.time,
          values: json.daily.apparent_temperature_max,
        },
        apparent_temperature_min: {
          keys: json.daily.time,
          values: json.daily.apparent_temperature_min,
        },
        apparent_temperature_mean: {
          keys: json.daily.time,
          values: json.daily.apparent_temperature_mean,
        },
      };
      setData(formattedData);
    } catch (err) {
      setError("Failed to load data. Try again.");
      setData({});
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchChartData };
};
