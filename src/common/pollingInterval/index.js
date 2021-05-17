import React from "react";

//Material UI
import {InputLabel,MenuItem,FormControl,Select} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {pollingIntervalChangeAction} from "../../services/redux/action/countryStuffAction";


//Funtion
export default function PollingInterval() {
  const dispatch = useDispatch();
//state stuff 
  const [timeInterval, setTimeInterval] = React.useState("");

  const handleChange = (event) => {
    //set the current choose value
    pollingIntervalChangeAction(dispatch, event.target.value)
    setTimeInterval(event.target.value);
  };

  return (
    <div className="input-polling-interval-main">
      {/* ============================ Select Time Interval for loding ========================== */}
      <FormControl variant="outlined" style={{ display: "grid" }}>
        <InputLabel id="demo-simple-select-outlined-label">
          Polling Interval
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={timeInterval}
          onChange={handleChange}
          label="TimeInterval"
          style={{ textAlign: "left" }}
        >
          <MenuItem value={20}>20 Sec</MenuItem>
          <MenuItem value={30}>30 Sec</MenuItem>
          <MenuItem value={45}>45 Sec</MenuItem>
          <MenuItem value={90}>90 Sec</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
