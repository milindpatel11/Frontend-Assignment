import '../css/Console-backup.css';
import logo from '../images/Logo.svg';
import collapse from '../icons/collapse.svg';
import {useState} from 'react';



function Console() {


  return (
    <div className="console flex-column">
       <div className="console-header flex-row">
        <div className="header-logo flex-row">
          <img className="logo" alt="Esper Logo Linked" src={logo}/>
          <div className="collapse flex-column">
            <img className="collapse" alt="collapse toggle" src={collapse}/>
          </div>
        </div>
        <div className="header-right">
          HEADER RIGHT HEADER RIGHT  HEADER RIGHT  HEADER RIGHT HEADER RIGHT
        </div>

       </div>

       <div className="console-content">

         <div>
           SIDE_NAV SIDE_NAV SIDE_NAV SIDE_NAV SIDE_NAV
         </div>
         <h3> Console </h3>
         <h3> Console </h3>
       </div>


    </div>
  );
}

export default Console;
