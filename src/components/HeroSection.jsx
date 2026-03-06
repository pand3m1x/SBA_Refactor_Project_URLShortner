import shortStackImg from '../../src/assets/shortStack_pancakes.svg'

function HeroSection(){

  return(
    <>
      <div id="heroSection" style={{display:"flex", margin:"5px"}}>
        <div id="heroInfo" style={{width:"350px", textAlign:"left", margin:"20px"}}>
          <h1>More than just bite sized links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button className="getStartedBtn">Get Started</button>
        </div>
        <div id="bodyImage" style={{width:"350px"}}>
          <img src={ shortStackImg } 
          alt="Image of blueberry pancake stack, with abstract shapes behind it." 
          style={{ width:"350px",height:"350px" }} />
        </div>
      </div>
    </>
  );
}
 export default HeroSection

//  <section class="hero">
//       <div id="heroInfo">
//         <h1>More than just bite sized links</h1>

//         <p>Build your brand’s recognition and get detailed insights 
//         on how your links are performing.</p>

//         <button class="getStartedBtn">Get Started</button>
//       </div>
//       <div id="bodyImage">
//         <img src="./images/shortStack_pancakes.svg" alt="Image of blueberry pancake stack, with abstract shapes behind it." style="width:500px;height:350px;">
//       </div>
//     </section>  