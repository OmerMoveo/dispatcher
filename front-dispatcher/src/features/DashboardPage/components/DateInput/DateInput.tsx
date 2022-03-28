import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { apiStrings, dateStrings } from "../../../../strings/strings";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ReactComponent as DateIcon } from "../../../../assets/date.svg";
import { StyledDateDiv } from "./style";
const DateInput = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <StyledDateDiv>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          openTo={dateStrings.Year}
          views={[dateStrings.Year, dateStrings.Month, dateStrings.Day]}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: apiStrings.Everything[1],
              }}
            />
          )}
          components={{
            OpenPickerIcon: DateIcon,
          }}
        />
      </LocalizationProvider>
    </StyledDateDiv>
  );
};

export default DateInput;
