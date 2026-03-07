
// NavBar [x]
// HeroSection [x]
// UrlShortner [x]
// InfoSection [x]
// StartTodaySection [x] 
// FootNav [x]

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import UrlShortner from '../components/UrlShortnerSection';
import InfoSection from '../components/InfoSection';
import StartTodaySection from '../components/StartTodaySection';
import FootNav from '../components/FootNav';

function Homepage(){

  return(

    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <UrlShortner></UrlShortner>
      <InfoSection></InfoSection>
      <StartTodaySection></StartTodaySection>
      <FootNav></FootNav>
    </>
  );
}

export default Homepage