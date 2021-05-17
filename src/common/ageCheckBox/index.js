import React from "react";
import {
  withStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {useDispatch} from "react-redux";
import {ageGroup18ChangeAction, ageGroup45ChangeAction} from "../../services/redux/action/countryStuffAction";

//Dynamic style 
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


//function 
export default function CheckboxLabels() {
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
      age18: false,
      age45: false,
      makeSound: false
  });

  const handleChange = (event) => {
      console.log('event.target.name', event.target.name)
      //state stuff
      if(event.target.name === 'age45') {
          ageGroup45ChangeAction(dispatch, event.target.checked)
      } else if(event.target.name === 'age18') {
          ageGroup18ChangeAction(dispatch, event.target.checked)
      }
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="ageCheckBoxMain">
      <FormGroup row className="input-checkbox-commons">
        {/* =============================== check age 18 + By deafult ================================ */}
        <FormControlLabel
          control={
            <Checkbox
              checked={state.age18}
              onChange={handleChange}
              name="age18"
              color="primary"
            />
          }
          label="18+ Age Group
          "
        />

        {/* =============================== check age 40 + ================================ */}
        <FormControlLabel
          control={<Checkbox name="age45" color="primary" />}
          checked={state.age45}
          onChange={handleChange}
          label="45+ Age Group"
        />
      </FormGroup>


      {/* =============================== speak sound when success================================ */}
      <FormControlLabel
        control={
          <Checkbox
            checked={state.makeSound}
            onChange={handleChange}
            name="makeSound"
            color="primary"
          />
        }
        label="Make Sound"
        style={{ paddingLeft: "4%" }}
      />
    </div>
  );
}
