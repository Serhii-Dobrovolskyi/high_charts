import { createContext, useState, useEffect } from "react";

type TChartContext = {
  charts: TChart[];
  setCharts: React.Dispatch<React.SetStateAction<TChart[]>>;
  deleteChart: (chartId: number) => void;
  editChart: (chartId: number, updatedChart: Partial<TChart>) => void;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

export const ChartsContext = createContext<TChartContext>({
  charts: [],
  setCharts: () => {},
  deleteChart: () => {},
  editChart: () => {},
  endDate: null,
  startDate: null,
  setEndDate: () => {},
  setStartDate: () => {},
});
type TChartsProviderProps = {
  children: React.ReactNode;
};
import { subDays, endOfDay } from "date-fns";
import { TChart } from "../types/chart";

export const ChartsProvider = ({ children }: TChartsProviderProps) => {
  const [charts, setCharts] = useState<TChart[]>(
    JSON.parse(localStorage.getItem("charts") || "[]")
  );
  const [startDate, setStartDate] = useState<Date | null>(
    subDays(new Date(), 7)
  );
  const [endDate, setEndDate] = useState<Date | null>(endOfDay(new Date()));
  const deleteChart = (chartId: number) => {
    setCharts((prevCharts) =>
      prevCharts.filter((chart) => chart.id !== chartId)
    );
  };
  const editChart = (id: number, updatedChart: Partial<TChart>) => {
    setCharts((prevCharts) =>
      prevCharts.map((chart) =>
        chart.id === id ? { ...chart, ...updatedChart } : chart
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("charts", JSON.stringify(charts));
  }, [charts]);

  return (
    <ChartsContext.Provider
      value={{
        charts,
        setCharts,
        deleteChart,
        editChart,
        startDate,
        endDate,
        setEndDate,
        setStartDate,
      }}
    >
      {children}
    </ChartsContext.Provider>
  );
};
