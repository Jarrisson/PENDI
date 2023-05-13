import PendiAppLogo from "../assets/PendiAppLogo.png";
import NuevoUsuario from "../assets/NuevoUsuario.png";
import "../Styles/Register.css";
function Register() {
  return (
    <div className="container-register">
         <header>
            <img className="LogoInicioH" src={PendiAppLogo} alt="LogoInicio"/>
        </header>
        <main className="main-container">
            <div className="Register-Image">
                <img className="RegistroImg" src={NuevoUsuario} alt="Registro"/>
            </div>

            <div className="Register-Form">
                <form className="Box-Register">
                    <div className="Boxis-Data">
                        <label for="">Nombre</label>
                        <input type="text" placeholder="Kanye" required/>
                    </div>
    
                    <div className="Boxis-Data">
                        <label for="">Apellido</label>
                        <input type="text" placeholder="Omari"/>
                    </div>
    
                    <div className="Boxis-Data">
                        <label for="">Telefono</label>
                        <input type="text" placeholder="1234"/>
                    </div>
                    
                    <div className="Boxis-Data">
                        <label for="Email">Email</label>
                        <input type="email" placeholder="ye24@gmail.com" required/>
                    </div>
    
                    <div className="Boxis-Data">
                        <label for="">Password</label>
                        <input type="text" placeholder="1234" required/>
                    </div>
    
                    <div className="Boxis-Data">
                        <label for="">Usuario</label>
                        <select name="Type-Client" id="Type-Client">
                            <option value="Natural">Natural</option>
                            <option value="Juridict">Juridico</option>
                        </select>
                    </div>
                    <button className="SubmitRegister">Crear Cuenta</button>
                </form>
            </div>
    </main>
    <footer>
     <p>&copy; Copyright 2023 PENDI APP</p>
    </footer>
    </div>
  )
}

export default Register