import { Box, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TDateRangePickerProps = {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  isDisabled?: boolean;
}

const DateRangePicker: React.FC<TDateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  isDisabled,
}) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <DatePicker
      selected={startDate}
      onChange={onStartDateChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Start date"
      customInput={<TextField label="Start date" fullWidth />}
      disabled={isDisabled}
    />
    <DatePicker
      selected={endDate}
      onChange={onEndDateChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="End date"
      customInput={<TextField label="End date" fullWidth />}
      maxDate={new Date()}
      disabled={isDisabled}
    />
  </Box>
);

export default DateRangePicker;
