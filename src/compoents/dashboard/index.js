//NPM pacakge
import React from "react";
import PropTypes from "prop-types";

//Material Ui 
import { makeStyles, useTheme,AppBar,Tabs ,Tab,Typography,Box,Button} from "@material-ui/core";
import { green } from "@material-ui/core/colors";


//Custom componets
import SearchByDistrict from "../searchByDistrict/index";
import SearchByPin from "../searchByPin/index";
// import PollingInterval from "../../common/pollingInterval";
// import AgeCheckBox from "../../common/ageCheckBox";
import ResultDataTale from '../../resultDataTable'

//style componnets
import "../../style/common.css";



function Dashboard(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="Dashboard"
      hidden={value !== index}
      id={`action-Dashboard-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-Dashboard-${index}`,
  };
}



export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        style={{ paddingTop: "1%", background: "white" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // variant="fullWidth"
        >
          <Tab
            label="Search By District"
            {...a11yProps(0)}
            style={{
              fontFamily: "inherit",
              color: "#3f51b5",
              fontSize: "77%",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          />
          <Tab
            label="Search By Pin"
            {...a11yProps(1)}
            style={{
              fontFamily: "inherit",
              color: "#3f51b5",
              fontSize: "77%",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          />
        </Tabs>
      </AppBar>
      {/* =================================== Search By District ================================== */}

      <Dashboard value={value} index={0} dir={theme.direction}>
        <SearchByDistrict />
      </Dashboard>

      {/* =================================== Search By Pin ================================== */}
      <Dashboard value={value} index={1} dir={theme.direction}>
        <SearchByPin />
      </Dashboard>

      {/*================================ Select Polling Interval ===========================  */}
      {/* <PollingInterval /> */}

      {/*================================ Select Age Check Box  ===========================  */}
      {/* <AgeCheckBox /> */}

      {/* =================================== Submit button  ================================== */}
      {/*<Button*/}
      {/*  variant="contained"*/}
      {/*  color="primary"*/}
      {/*  className="button"*/}
      {/*  style={{ marginLeft: "4%" }}*/}
      {/*>*/}
      {/*  Start Monitor*/}
      {/*</Button>*/}
      {/* ==================== Resut Data Table ===============================*/}

    </div>
  );
}
