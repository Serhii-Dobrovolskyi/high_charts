import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ChartModal from "./ChartModal";
import { TChart } from "../types/chart";

type TEditChartProps = {
  initialData?: Omit<TChart, "id">;
  onSubmit: (data: Omit<TChart, "id">) => void;
}


const EditChart = ({initialData,onSubmit}: TEditChartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <>
      <IconButton onClick={open}>
        <EditIcon />
      </IconButton>
      <ChartModal
        open={isOpen}
        onClose={close}
        initialData={initialData}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default EditChart;
