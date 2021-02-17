import test from '../icons/test.svg';
import devices from '../icons/devices.svg';
import dashboard from '../icons/dashboard.svg';

function SideNavItem (props) {

  console.log(props.collapse);

  return (
    <div className={props.active ? "nav-item active flex-row" : "nav-item flex-row"} onClick={props.onClick}>
      <img src={props.icon} alt={props.alt} />
      <h4 className={props.collapse && "hidden"} > 
        {props.title}
      </h4>
    </div>
  )
}


function SideNav(props) {


  return (
    <div className= {props.navcollapse ? "side-nav flex-column collapsed" : "side-nav flex-column"}>
      <br/>
      <SideNavItem title = "Dashboard" active={props.activenav==="Dashboard"}
        onClick={()=>props.changeActiveNav("Dashboard")} icon={dashboard} collapse={props.navcollapse}/>
      <SideNavItem title = "Devices and Groups" active={props.activenav==="Devices and Groups"}
        onClick={()=>props.changeActiveNav("Devices and Groups")} icon={devices} collapse={props.navcollapse}/>
      <SideNavItem title = "Test" active={props.activenav==="Test"}
        onClick={()=>props.changeActiveNav("Test")} icon={test} collapse={props.navcollapse}/>
    </div>
  );
}

export default SideNav;
