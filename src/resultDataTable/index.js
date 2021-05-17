import React from 'react'
import '../style/resultDataTable.css';


function DataTable(props) {
    const {centersByDistrict} = props;
    const [items, setItems] = React.useState([]);
    // if(centersByDistrict) {
    //     let allItems = []
    //     for(let dist of Object.keys(centersByDistrict)) {
    //         allItems.concat(centersByDistrict[dist].centers);
    //     }
    //     setItems(allItems);
    // }
    return (
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
            {/*<tr>*/}
            {/*  <td>d Doe</td>*/}
            {/*  <td>jane.doe@foo.com</td>*/}
            {/*  <td>01 800 2000</td>*/}
            {/*  <td>01 800 2000</td>*/}
            {/*  <td>01 800 2000</td>*/}
            {/*  <td>01 800 2000</td>*/}
            {/*  <td>01 800 2000</td>*/}

            {/*</tr>*/}
          {items && items.length > 0 && items.map(item => {
              <tr>
                  <td>d Doe</td>
                  <td>jane.doe@foo.com</td>
                  <td>01 800 2000</td>
                  <td>01 800 2000</td>
                  <td>01 800 2000</td>
                  <td>01 800 2000</td>
                  <td>01 800 2000</td>

              </tr>
          })}

          
           
          </tbody></table>
      </div>
    )
}

export default DataTable
