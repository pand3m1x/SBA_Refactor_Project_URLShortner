

function NavBar(){

  return(
    <>
      <div style={{border:"2px solid yellow"}}>
        <nav>
          <ul id="leftMenuItems">
            <li id="logo"><strong>Short Stack</strong></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <ul id="rightMenuItems">
            <li><a href="#">Log In</a></li>
            <li><button id="signUp">Sign Up</button></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar