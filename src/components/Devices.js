import '../css/Devices.css';
import testDataGroups from '../test-data/testDataGroups';


function DeviceItem (props) {

  const group = testDataGroups.filter(item => (item.id === props.item.Groups.split("/")[props.item.Groups.split("/").length-2]))[0]["name"]

  console.log(props.item.tags && props.item.tags);
  return (
    <>
      <td className="device-name"> {props.item["Device Name"]} </td>
      <td className="alias-name"> <h4>{props.item["Alias Name"]}</h4> </td>
      <td className="item-in-group"> <h4>{group}</h4> </td>
      <td className={`online-offline status-${props.item["Offline/Online"]}`}> <h4>{props.item["Offline/Online"]}</h4> </td>
      <td className="gms-nongms"> {props.item["GMS or Non-GMS"]} </td>
      <td className="tags flex-row">
       {props.item.Tags.map (item => <h4 key={item}>{item}</h4>)}
      </td>
    </>
  )
}


function Devices(props) {

  const data = props.devicessdata;

  return (
    <>
      <div className="devices-table-div flex-row">
         <table className="devices-table">
            <thead>
                <tr>
                  <th>Device Name </th>
                  <th>Alias Name</th>
                  <th>Group Name</th>
                  <th>Online/Offline</th>
                  <th>GMS/Non GMS</th>
                  <th>Tags</th>
                </tr>
            </thead>

            <tbody>

              {
                data.map( (item) => <tr key={item["Device ID"]}> <DeviceItem item={item}/> </tr>)
              }

            </tbody>

         </table>
      </div>
    </>

  );
}

export default Devices;
