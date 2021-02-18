import '../css/GroupsAndDevices.css';
import collapse from '../icons/collapse.svg';
import {useState} from 'react';
import Groups from '../components/Groups'
import Devices from '../components/Devices'
import testDataGroups from '../test-data/testDataGroups'
import testDataDevices from '../test-data/testDataDevices'


function GroupsAndDevices() {

  const [ groupcollapse, setGroupCollapse] = useState (false);
  const [ activegroup, setActiveGroup] = useState ("All Devices");

  const changeActiveGroup = (group) => {
    setActiveGroup(group)
  }


  return (
    <>
      <div className="console-content-top flex-row">
         <p> Devices and Group Actions, Filter etc </p>
      </div>

      <div className="console-content-bottom">

         <div className="groups-devices-content flex-row">

            <div className={groupcollapse ? "groups flex-column collapsed" : "groups flex-column"}>

                <div className={groupcollapse ? "group-header flex-row collapsed" : "group-header flex-row"}>
                    <h4 className={groupcollapse ? "collapsed" : undefined}> Groups </h4>
                    <div className={groupcollapse ? "group-collapse" : "group-collapse group-collpase-rotate"} onClick={()=> setGroupCollapse(!groupcollapse)}>
                      <img alt="group-collapse-toggle" src={collapse} />
                    </div>
                </div>

                <div className={groupcollapse ? "all-groups hidden" : "all-groups"}>
                    <Groups groupsdata={testDataGroups} activegroup={activegroup}
                      changeActiveGroup={changeActiveGroup}/>
                </div>

            </div>

            <div className={groupcollapse ? "devices flex-column expanded" : "devices flex-column"}>

                <div className="devices-header flex-row">
                  <h4 className="test"> {activegroup} (Showing All Devices - Not Filtered by Group) </h4>
                </div>

                <div className="devices-main flex-column">
                  <Devices devicessdata={testDataDevices} />
                </div>

            </div>

         </div>

      </div>
    </>

  );
}

export default GroupsAndDevices;
