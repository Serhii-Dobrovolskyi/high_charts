import { Typography, Box } from "@mui/material";
import HighchartsComponent from "../components/HighchartsComponent";

const ViewMode = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">View Mode</Typography>
      <Typography>Text for testing </Typography>
      <HighchartsComponent/>
    </Box>
  );
};

export default ViewMode;
