import { useContext, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFetchChartData } from "../hooks/useFetchChartData";
import DateRangePicker from "./DateRangePicker";
import Chart from "./Chart";
import NAMES_OF_CHARTS from "../constants/namesOfCharts";
import { ChartsContext } from "../context/chartsContext";
import { TChartType } from "../components/Chart";

const HighchartsComponent: React.FC = () => {
  const { data, error, isLoading, fetchChartData } = useFetchChartData();
  const { charts, startDate, endDate, setStartDate, setEndDate } =
    useContext(ChartsContext);
  const handleFetchData = () => {
    if (startDate && endDate) {
      fetchChartData(startDate, endDate);
    }
  };

  useEffect(() => {
    if (!startDate || !endDate) return;
    fetchChartData(startDate, endDate);
  }, []);

  return (
    <Box
      sx={{
        padding: 3,
        background:
          "linear-gradient(to right,rgb(155, 173, 207),rgb(8, 20, 46))", // Градиент фона
        minHeight: "100vh", // Заполняет весь экран
        color: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Select dates for the chart
      </Typography>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        isDisabled={!charts.length}
      />
      <Button
        variant="contained"
        onClick={handleFetchData}
        disabled={isLoading || !startDate || !endDate}
        sx={{ mt: 2 }}
      >
        {isLoading ? "Loading..." : "Get"}
      </Button>
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      <Grid container spacing={2}>
        {!!Object.keys(data).length &&
          charts.map((chart, index) => (
            <Grid
              size={{ sm: 12, md: 6 }}
              key={index}
              sx={{
                background: "#fff",
                color: "#000",
                padding: 2,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <Box>
                <Chart
                  data={data[chart.dataType]}
                  name={chart.name}
                  type={chart.type as TChartType}
                  color={chart.color}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default HighchartsComponent;
