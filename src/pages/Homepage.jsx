
// NavBar
// HeroSection
// UrlShortner 
// InfoSection
// StartTodaySection 
// FootNav 

import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import UrlShortner from '../components/UrlShortnerSection'
import InfoSection from '../components/InfoSection';

function Homepage(){

  return(

    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <UrlShortner></UrlShortner>
      <InfoSection></InfoSection>
    </>
  );
}

export default Homepage