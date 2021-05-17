import React from "react";
import {Button, Checkbox, TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

//Custom components
import PollingInterval from "../../common/pollingInterval/index";
import AgeCheckBox from '../../common/ageCheckBox'
import {countryStuffReducer} from "../../services/redux/reducer/countryStuffReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {
    getAllDistrictsAction,
    getAllStatesAction,
    searchCentersByDistrictAction
} from "../../services/redux/action/countryStuffAction";
// import Spinner from "../../common/spinner/spinner";
// import Spinner from "../../spinner";



const icon = <CheckBoxOutlineBlankIcon fontSize="small" color="#3f51b5" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Dashboard = ({countryStuffReducer}) => {
    const dispatch = useDispatch();
    const [selectedDist, setSelectedDist] = React.useState([]);
    const [monitoring, setMonitoring] = React.useState(false);
    const [timerId, setTimerId] = React.useState(0);
    // let selectedDist = [];
    // let pollingInterval = 20;

    const countryStuffProps = useSelector(state => state.countryStuffReducer);
    // console.log('states', countryStuffProps.states)
    // console.log('pollingInterval', countryStuffProps.pollingInterval)
    if(!countryStuffProps.states) {
        getAllStatesAction(dispatch);
    }
    function handleStateChange(event, values) {
        console.log('handleStateChange', values)
        const stateId = values.state_id;
        setSelectedDist([]);
        getAllDistrictsAction(dispatch, stateId);
    }
    function handleDistrictsChange(event, values) {
        console.log('handleDistrictsChange', values)
        setSelectedDist(values);
    }

    function handleMonitor() {
        if(!monitoring && selectedDist && selectedDist.length > 0) {
            setMonitoring(!monitoring);
            searchCentersByDistrictAction(dispatch,selectedDist )
            let tid = setInterval(() => {
                searchCentersByDistrictAction(dispatch,selectedDist)
            }, countryStuffProps.pollingInterval * 1000);
            setTimerId(tid);
        } else if(monitoring) {
            setMonitoring(!monitoring);
            clearInterval(timerId)
            setTimerId(0);
        }
    }
    // getAllStatesAction(dispatch);
    // console.log('countryStuffProps.centersByDistrict', countryStuffProps.centersByDistrict, Object.keys(countryStuffProps.centersByDistrict))
    if(countryStuffProps.centersByDistrict) {
        console.log('countryStuffProps.centersByDistrict', countryStuffProps.centersByDistrict, Object.keys(countryStuffProps.centersByDistrict))
    }
  return (
    <div>

      {/*================================= Select State  ================================= */}
        {!monitoring &&
         <>
             <Autocomplete
                 id="combo-box-demo"
                 // freeSolo  //remove select icon
                 disableClearable
                 options={countryStuffProps.states}
                 getOptionLabel={(option) => option.state_name}
                 className='input-design'
                 onChange={handleStateChange}
                 renderInput={(params) => (
                     <TextField {...params} label="Select State" variant="outlined" />
                 )}
             />

             {/* ================================= Select Districts =================================  */}
             <Autocomplete
                 multiple //for using one option only
                 disableClearable //disable clear button
                 id="checkboxes-tags-demo"
                 options={countryStuffProps.districts || []}
                 disableCloseOnSelect
                 onChange={handleDistrictsChange}
                 getOptionLabel={(option) => option.district_name}
                 renderOption={(option, { selected }) => (
                     <React.Fragment>
                         <Checkbox
                             icon={icon}
                             checkedIcon={checkedIcon}
                             style={{ marginRight: 8 }}
                             checked={selected}
                         />
                         {option.district_name}
                     </React.Fragment>
                 )}
                 className='input-design'
                 renderInput={(params) => (
                     <TextField
                         {...params}
                         variant="outlined"
                         label="Select Districts"
                     />
                 )}
             />

             {/*================================ Select Polling Interval ===========================  */}
             <PollingInterval />
         </>}

        {/*================================ Select Age Check Box  ===========================  */}
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

                    {countryStuffProps && countryStuffProps.centersByDistrict && Object.keys(countryStuffProps.centersByDistrict).length > 0 && Object.keys(countryStuffProps.centersByDistrict).map(id => {
                        console.log('id', id, countryStuffProps.ageGroup45, countryStuffProps.ageGroup18)
                        return countryStuffProps.centersByDistrict[id].centers.map(center => {
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
                            return <tr>
                                <td>{vaccineType}</td>
                                <td>{date}</td>
                                <td>{pincode}</td>
                                <td>{availableCapacity}</td>
                                <td>{min_age_limit}</td>
                                <td>{name}</td>
                                <td>{address}</td>

                            </tr>
                        })

                    })}



                    </tbody></table>
            </div>
        </div>
    </div>
  );
}

export default connect(
    null,
    { countryStuffReducer }
)(Dashboard);

//option

