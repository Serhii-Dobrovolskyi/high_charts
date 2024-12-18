import { Box } from "@mui/material";
import HighchartsComponent from "../components/HighchartsComponent";

const ViewMode = () => {
  return (
    <Box sx={{
      padding: 3,
      background:
        "linear-gradient(to right,rgb(160, 186, 236),rgb(8, 20, 46))",
      color: "#fff",
      minHeight:"100vh",
    }}>
      <HighchartsComponent />
    </Box>
  );
};

export default ViewMode;
