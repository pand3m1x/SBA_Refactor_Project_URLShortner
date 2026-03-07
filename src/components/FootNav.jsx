import facebookIcon from '../assets/icon-facebook.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';

function FootNav(){

  return(
    <>
       <nav id="bottomNav">
        <div className="navLogo">
          <a href=""><p className="logoText">ShortStack</p></a>
        </div>
       <div>
         <ul>
           <a href=""><li><h5>Features</h5></li></a>

           <a href=""><li className="notHeader">Link Shortening</li></a>
           <a href=""><li className="notHeader">Branded Links</li></a>
           <a href=""><li className="notHeader">Analytics</li></a>
         </ul>
       </div>
       <div>
         <ul>
           <a href=""><li><h5>Resources</h5></li></a>

           <a href=""><li className="notHeader">Blog</li></a>
           <a href=""><li className="notHeader">Developers</li></a>
           <a href=""><li className="notHeader">Support</li></a>
         </ul>
       </div>
       <div>
         <ul>
           <a href=""><li><h5>Company</h5></li></a>

           <a href=""><li className="notHeader">About</li></a>
           <a href=""><li className="notHeader">Our Team</li></a>
           <a href=""><li className="notHeader">Careers</li></a>
           <a href=""><li className="notHeader">Contact</li></a>
         </ul>
       </div>
       <div id="socialMediaBar">
         <a href=""><img src={ facebookIcon } alt="clickable icon of facebook."/></a>
         <a href=""><img src={ twitterIcon } alt="clickable icon of twitter."/></a>
         <a href=""><img src={ pinterestIcon } alt="clickable icon of Pinterest."/></a>
         <a href=""><img src={ instagramIcon } alt="clickable icon of instagram."/></a>
      </div>
     </nav>
    </>
  );
}

export default FootNav


{/* //  <nav id="bottomNav">
//       <div class="navLogo">
//         <a href=""><p class="logoText">ShortStack</p></a>
//       </div>
//       <div>
//         <ul>
//           <a href=""><li><h5>Features</h5></li></a>

//           <a href=""><li class="notHeader">Link Shortening</li></a>
//           <a href=""><li class="notHeader">Branded Links</li></a>
//           <a href=""><li class="notHeader">Analytics</li></a>
//         </ul>
//       </div>
//       <div>
//         <ul>
//           <a href=""><li><h5>Resources</h5></li></a>

//           <a href=""><li class="notHeader">Blog</li></a>
//           <a href=""><li class="notHeader">Developers</li></a>
//           <a href=""><li class="notHeader">Support</li></a>
//         </ul>
//       </div>
//       <div>
//         <ul>
//           <a href=""><li><h5>Company</h5></li></a>

//           <a href=""><li class="notHeader">About</li></a>
//           <a href=""><li class="notHeader">Our Team</li></a>
//           <a href=""><li class="notHeader">Careers</li></a>
//           <a href=""><li class="notHeader">Contact</li></a>
//         </ul>
//       </div>
//       <div id="socialMediaBar">
//         <!-- social media links -->Hello
//         <a href=""><img src="./images/icon-facebook.svg" alt="clickable icon of facebook."></a>
//         <a href=""><img src="./images/icon-twitter.svg" alt="clickable icon of twitter."></a>
//         <a href=""><img src="./images/icon-pinterest.svg" alt="clickable icon of Pinterest."></a>
//         <a href=""><img src="./images/icon-instagram.svg" alt="clickable icon of instagram."></a>
//       </div>
//     </nav> */}