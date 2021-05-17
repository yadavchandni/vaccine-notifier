import React from "react";
import TextField from "@material-ui/core/TextField";
import PollingInterval from '../../common/pollingInterval/index'
import AgeCheckBox from '../../common/ageCheckBox'
import {
    searchCentersByDistrictAction,
    searchCentersByPincodeAction
} from "../../services/redux/action/countryStuffAction";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";


export default function ColorTextFields() {
    const dispatch = useDispatch();
    const countryStuffProps = useSelector(state => state.countryStuffReducer);
    const [selectedPin, setSelectedPin] = React.useState([]);
    const [monitoring, setMonitoring] = React.useState(false);
    const [timerId, setTimerId] = React.useState(0);

    function handlePinChange(e) {
        setSelectedPin(e.target.value)
    }

    function handleMonitor() {
        if(!monitoring && selectedPin && selectedPin > 99999 && selectedPin < 1000000) {
            searchCentersByPincodeAction(dispatch,selectedPin);
            setMonitoring(!monitoring);
            let tid = setInterval(() => {
                searchCentersByPincodeAction(dispatch,selectedPin);
            }, countryStuffProps.pollingInterval * 1000);
            setTimerId(tid);
        } else if(monitoring) {
            setMonitoring(!monitoring);
            clearInterval(timerId)
            setTimerId(0);
        }
    }
    console.log('countryStuffProps.centersByPincode', countryStuffProps.centersByPincode)
    return (
    <div >
        {!monitoring &&
        <>
            <form noValidate autoComplete="off" >
                <TextField
                    style={{
                        width: "95%",
                        position: "relative",
                        color: " #3f51b5",
                        marginLeft:'1%',
                        marginTop:'3%'
                    }}
                    id="outlined-secondary"
                    label="Enter PIN"
                    variant="outlined"
                    color="secondary"
                    type='number'
                    onChange={handlePinChange}
                />
            </form>
            {/*================================ Select Polling Interval ===========================  */}
            <PollingInterval />
            {/*================================ Select Age Check Box  ===========================  */}
        </>}
      <AgeCheckBox />
        <Button
            variant="contained"
            color="primary"
            className="button"
            style={{ marginLeft: "4%" }}
            onClick={handleMonitor}
        >
            {!monitoring ? 'Start Monitor' : 'Stop Monitor'}
        </Button>

        <div style={{paddingTop: "4%"}}>
            <div className="table-users">
                <table cellSpacing={0}>
                    <tbody><tr>
                        <th>Vaccine Type</th>
                        <th>Date</th>
                        <th>Pincode</th>
                        <th>Available Capacity</th>
                        <th>Age Group</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>

                    {countryStuffProps && countryStuffProps.centersByPincode && countryStuffProps.centersByPincode.map(center => {
                        const vaccineType = center.sessions[0].vaccine;
                        const date = center.sessions[0].date;
                        const availableCapacity = center.sessions[0].available_capacity;
                        const min_age_limit = center.sessions[0].min_age_limit;
                        const pincode = center.pincode;
                        const name = center.name;
                        const address = center.address;

                        // if(!countryStuffProps.ageGroup18 && !countryStuffProps.ageGroup45) {
                        //     /// do nothing
                        // } else
                        if(!countryStuffProps.ageGroup18 && min_age_limit == 18) {
                            return <></>
                        } else if(!countryStuffProps.ageGroup45 && min_age_limit == 45) {
                            return <></>
                        }
                        return <tr >
                            <td>{vaccineType}</td>
                            <td>{date}</td>
                            <td>{pincode}</td>
                            <td>{availableCapacity}</td>
                            <td>{min_age_limit}</td>
                            <td>{name}</td>
                            <td>{address}</td>

                        </tr>
                    })}



                    </tbody></table>
            </div>
        </div>
    </div>
  );
}
