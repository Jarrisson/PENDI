import PendiAppLogo from '../assets/PendiAppLogo.png'
import LoginImage from '../assets/LoginImage.png'
import PendiLogo from '../assets/PendiLogo.png'
import Register from "./Register.jsx";
import '../Styles/Login.css'

function App() {
  return (
    <>
      <main>
        <div className='Contend-image'>
              <div> <img className="PendiAppLogo" src={PendiAppLogo} alt="Pendi"/></div>
              
              <div><img class="LoginImage" src={LoginImage} alt="Login-image"/></div>
              <p>&copy;Copyright 2023 PENDI APP</p>
        </div>
        <div className="Login-form">
              <div class="WelcomeInput">
                  <img class="PendiLogo" src={PendiLogo} alt="logoBienvenida"/>
                  <p class="Welcome">BIENVENIDO</p>
              </div>

              <div>
                  <div className="LoginInputs1"> <input type="text" placeholder="Username"/></div>
                  <div className="LoginInputs2"> <input type="password" placeholder="Password"/></div>
                  
                  <div className="rememberMe">
                      <input type="checkbox"/>
                      <span className="remember">Remember Me</span>
                  </div>
                  <button className="SubmitLogin" onClick={Register}>Login</button>
                  
                  <div className="AccountOptions">
                      <span className="NoAccount"> No Account? Go to <a className="SingUp">Sing Up</a></span>
                      <a className="Forgot">Forget Password?</a>
                  </div>
                </div>
          </div>
      </main>
    </>
  )
}

export default App
