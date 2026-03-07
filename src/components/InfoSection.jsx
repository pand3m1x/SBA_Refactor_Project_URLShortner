import brandRecognition from '../assets/icon-brand-recognition.svg'
import detailedRecords from '../assets/icon-detailed-records.svg'
import fullyCustomizable from '../assets/icon-fully-customizable.svg'

function InfoSection(){

  return(
    <>
      <div id="infoSection" style={{backgroundColor:"hsl(257, 7%, 63%)"}}>
        <div id="adInfo" style={{display:"flex", alignContent:"center"}}>
          <h2>Advanced Statistics</h2>

          <p>Track how your links are performing across the web with our 
          advanced statistics dashboard.</p>
        </div>
        <div id="gridContainer">
          <div className="infoStats">
            <div className="tlImage"><img src={ brandRecognition }
            alt="simplified icon of graph." id="graphPic"/></div>
            
            <h3 className="infograph">Brand Recognition</h3>

            <p>Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className="infoStats">
            <div className="tlImage"> <img src={ detailedRecords } 
            alt="simplified icon of record keeping" id="recordPic"/></div>
            
            <h3 className="infograph">Detailed Records</h3>

            <p>Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.</p>
          </div>
          <div className="infoStats">
            <div className="tlImage"><img src={ fullyCustomizable }
            alt="simplified icon of art supplies" id="customizePic"/></div>

            <h3 className="infograph">Fully Customizable</h3>

            <p>Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection










{/*
  <main>
    <div id="space">
    <div class="container" id="urlSection">
    <input type="text" id="url" placeholder="Shorten a link here..." required>

      <button id="shortenItBtn">Shorten It!</button>
    </div>
    <ul id="links"></ul>
  </div>
     <div id="adInfo">
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