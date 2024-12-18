import { useState } from "react";
import { Button } from "@mui/material";

import ChartModal from "../components/ChartModal";
import { TChart } from "../types/chart";

type TCreateChartProps = {
  onSubmit: (data: Omit<TChart, 'id'>) => void;
};

const CreateChart = ({ onSubmit }: TCreateChartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onOpen}
        sx={{ marginBottom: 2 }}
      >
        Add New Chart
      </Button>
      <ChartModal open={isOpen} onClose={onClose} onSubmit={onSubmit} />
    </>
  );
};

export default CreateChart;
