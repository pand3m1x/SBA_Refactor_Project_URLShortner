

function NavBar(){

  return(
    <>
      <div id="topNav" style={{ backgroundColor:"white" }}>
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

//  <nav id="topNav">
//       <div id="upNavLeft">
//         <div class="navLogo">
//           <a href=""><p class="logoText">ShortStack</p></a>
//         </div>
//         <ul>
//           <a href=""><li>Features</li></a>
//           <a href=""><li>Pricing</li></a>
//           <a href=""><li>Resources</li></a>
//         </ul>
//       </div>
//       <div id="upNavRight">
//         <ul>
//           <a href=""><li>Login</li></a>
//           <a href=""><li style="background-color: hsl(180, 66%, 49%); border-radius: 20px;">Sign Up</li></a>
//         </ul>
//       </div>
//     </nav>