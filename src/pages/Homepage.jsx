
// NavBar
// HeroSection
// UrlShortner 
// InfoSection
// StartTodaySection 
// FootNav 

import NavBar from '../components/NavBar'
import UrlShortner from '../components/UrlShortnerSection'

function Homepage(){

  return(

    <>
      <NavBar></NavBar>
      <h1>Short Stack</h1>
      <UrlShortner></UrlShortner>
    </>
  );
}

export default Homepage