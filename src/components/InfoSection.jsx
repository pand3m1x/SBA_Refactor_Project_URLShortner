import brandRecognition from '../assets/icon-brand-recognition.svg'
import detailedRecords from ''
import fullyRecognizeable from ''

function InfoSection(){

  return(
    <>
      <div id="adInfo">
        <h2>Advanced Statistics</h2>

        <p>Track how your links are performing across the web with our 
        advanced statistics dashboard.</p>
      </div>
      <div id="gridContainer">
        <div class="infoStats">
          <div class="tlImage"><img src={ brandRecognition }
          alt="simplified icon of graph." id="graphPic"/></div>
          
          <h3 class="infograph">Brand Recognition</h3>

          <p>Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div class="infoStats">
          <div class="tlImage"> <img src="./images/icon-detailed-records.svg" 
          alt="simplified icon of record keeping" id="recordPic"/></div>
          
          <h3 class="infograph">Detailed Records</h3>

          <p>Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.</p>
        </div>
        <div class="infoStats">
          <div class="tlImage"><img src="./images/icon-fully-customizable.svg" 
          alt="simplified icon of art supplies" id="customizePic"/></div>

          <h3 class="infograph">Fully Customizable</h3>

          <p>Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.</p>
        </div>
      </div>
    </>
  );
}

export default InfoSection










{/* <div id="adInfo">
      <h2>Advanced Statistics</h2>

      <p>Track how your links are performing across the web with our 
      advanced statistics dashboard.</p>
    </div>
    <div id="gridContainer">
      <div class="infoStats">
        <div class="tlImage"><img src="./images/icon-brand-recognition.svg" alt="simplified icon of graph." id="graphPic"></div>
        
        <h3 class="infograph">Brand Recognition</h3>

        <p>Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      <div class="infoStats">
        <div class="tlImage"> <img src="./images/icon-detailed-records.svg" alt="simplified icon of record keeping" id="recordPic"></div>
        
        <h3 class="infograph">Detailed Records</h3>

        <p>Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.</p>
      </div>
      <div class="infoStats">
        <div class="tlImage"><img src="./images/icon-fully-customizable.svg" alt="simplified icon of art supplies" id="customizePic"></div>

        <h3 class="infograph">Fully Customizable</h3>

        <p>Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.</p>
      </div>
    </div>
  </main> */}