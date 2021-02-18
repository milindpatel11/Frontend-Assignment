import '../css/Login1.css';
import logo from '../images/Logo.svg';
import singupbot from '../images/bot-signup.png';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';



function Login1(props) {

  const [endpoint, setEndPoint] = useState ("");
  const [error, setEror] = useState (false);
  const history = useHistory();

  const handleChange = (e) => {
    setEndPoint(e.target.value)
  }

  const handleSubmit = () => {
    if (endpoint==="") {
      setEror(true)
    } else {
      setEror(false)
      history.push("login")
    }
  }

  return (
    <div className="login1 flex-row">
      <div className="login-left flex-column">
        <a href={"#"}>
          <img className="logo" alt="Esper Logo Linked" src={logo}/>
        </a>
        <img className="signup-bot" alt="Signup Bot Illustration" src={singupbot}/>
        <div className="signup-group flex-column">
          <h1> Don’t Have An Account? </h1>
          <div className="signup-button"> Signup for Free! </div>
        </div>
      </div>

      <div className="login-right flex-row">
        <div className="login-form-1 flex-column">
            <h1 className="login-form-header"> LOGIN TO YOUR ESPER ACCOUNT </h1>
            <h4> Enter your unique endpoint name below and we'll take you to your account. You can then login with your Esper credentials. </h4>
            <div className="portal-url flex-row">
              <input className="input-portal" placeholder='Endpoint Name' onChange={handleChange}/>
              <h2> .esper.cloud </h2>
            </div>
            {error && <h4 style={{color:"red"}}> Please enter valid input </h4>}
            <div className="login-box flex-column">
              <a href="#"> Forgot Your Portal URL? </a>
              <button className="primary" onClick={handleSubmit}> Login </button>
            </div>
            <div className="singup-box flex-column">
              <h3> OR </h3>
              <button className="secondary"> Signup </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
