
function NavBar() {
  return ( 
    <header>
    <nav class="mainContainer">
        <div class="mainButton">
               <a href="" class="indexBtn">
            <span>
                <img class="indexImg" src="../assets/img/PendiAppLogo.png" alt=""/>
            </span>
        </a>
        </div>
        <div class="SecondButtons">
            <a href="" class="createBtn">
            <span class="newPay">
                <img class="createCharge" src="../assets/img/NewPay.png" alt="Create"/>
            </span>
        </a>
        <a href="" class="userBtn">
            <span>
                <img class="userImg" src="../assets/img/user.png" alt=""/>
            </span>
        </a>

        <a href="" class="configBtn">
            <span>
                <img class="configImg" src="../assets/img/Config.png" alt=""/>
            </span>
        </a>   
        </div>
      </nav>
</header>
   )
}

export default NavBar