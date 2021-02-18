import '../css/Console.css';
import logo from '../images/Logo.svg';
import onlylogo from '../images/only-logo.svg';
import collapse from '../icons/collapse.svg';
import {useState} from 'react';
import SideNav from '../components/SideNav'
import Placeholder from '../components/Placeholder'
import GroupsAndDevices from '../components/GroupsAndDevices'




function Console() {

  const [ navcollapse, setNavCollapse] = useState (false);
  const [ activenav, setActiveNav] = useState ("Dashboard");

  const changeActiveNav = (input) => {
    setActiveNav(input)
  }

  return (
    <div className="console flex-row">

       <div className="console-left flex-column">
        <div className="console-logo flex-row">
          <img className={navcollapse ? "logo logo-only" : "logo"} alt="Esper Logo Linked"
            src={navcollapse ? onlylogo : logo}/>
          <div className={navcollapse ? "collapse" : "collapse collpase-rotate"} onClick={()=> setNavCollapse(!navcollapse)}>
            <img alt="collapse-toggle" src={collapse} />
          </div>
        </div>

        <SideNav navcollapse={navcollapse} changeActiveNav={changeActiveNav} activenav={activenav}/>

       </div>

       <div className="console-right">

         <div className="console-header flex-row">
          <h3> {activenav} </h3>
          <div className="header-right-group">
            <a href="https://docs.esper.io/home/console.html" target="_blank"
              rel="noopener"> Docs  </a>
          </div>
         </div>

         <div className="console-content flex-column">
            {
              (activenav === "Dashboard") && <Placeholder title="Dashboard" top={true}/>
            }
            {
              (activenav === "Devices and Groups") && <GroupsAndDevices/>
            }
            {
              (activenav === "Test") && <Placeholder title="Test"/>
            }
         </div>
       </div>


    </div>
  );
}

export default Console;
