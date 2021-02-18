import '../css/Login2.css';
import logo from '../images/Logo.svg';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';



function Login2(props) {

  const [username, setUserName] = useState ("");
  const [password, setPassword] = useState ("");
  const [error, setEror] = useState (false);
  const history = useHistory();


  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUserName(e.target.value);
    } else if  (e.target.id === "password") {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    if (username === "" || password === "") {
      setEror(true)
      e.preventDefault()
    } else {
      setEror(false)
      history.push("console");
    }
  }

  return (
    <div className="login2 flex-column">
     <div className="login2-container flex-column">
        <img className="logo2" alt="Esper Logo Linked" src={logo}/>
        <h3 className="login2-header" > Login to your account </h3>

        <form className="login2-form flex-column">
          <input id="username" placeholder="Enter username" type="text" value={username} onChange={handleChange}/>
          <input id="password" placeholder="Enter password" type="password" value={password}  onChange={handleChange}/>
          {
            error && <h5 style={{color:"red"}}> Please type in both fields </h5>
          }
          <button className="tertiary login2-button" onClick={handleSubmit}> Login </button>
        </form>

        <div className="policy">
          <h4 > Privacy policy • Terms of use </h4>
        </div>

      </div>
    </div>
  );
}

export default Login2;
