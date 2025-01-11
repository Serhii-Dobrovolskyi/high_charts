import { useState } from "react";
import { Box, Modal, TextField, Button, MenuItem } from "@mui/material";
import { TChart } from "../types/chart";
import CHART_TYPES from "../constants/chartTypes";
import CHART_DATA from "../constants/chartData";

type TChartModalProps = {
  open: boolean;
  onClose: () => void;
  initialData?: Omit<TChart, "id">;
  onSubmit: (data: Omit<TChart, "id">) => void;
};

const ChartModal: React.FC<TChartModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<Omit<TChart, "id">>({
    name: initialData?.name || "",
    color: initialData?.color || "",
    type: initialData?.type || "",
    dataType: initialData?.dataType || "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSubmit(formData);
    onClose();
  };

  const handleClose = () => {
    onClose();
    setFormData({ name: "", color: "", type: "", dataType: "" });
  };
  return (
    <Modal open={open} onClose={handleClose} >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h2>{!initialData ? "Add New Chart" : "Edit Chart"}</h2>
        <TextField
          fullWidth
          label="Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Color"
          type="color"
          value={formData.color}
          onChange={(e) => handleInputChange("color", e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Type"
          value={formData.type}
          onChange={(e) => handleInputChange("type", e.target.value)}
          margin="normal"
        >
          {CHART_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          label="Data"
          value={formData.dataType}
          onChange={(e) => handleInputChange("dataType", e.target.value)}
          margin="normal"
        >
          {CHART_DATA.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={!formData.name}
          >
            {!initialData ? "Add" : "Save"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChartModal;
