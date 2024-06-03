import React from 'react'
import Country from "../Components/Country"
import Review from "../Components/Review"
import Service from "../Components/Service"
import University from "../Components/University"
import Body from "../Components/Body"
import AboutConsultancy from "../Components/AboutConsultancy"
import OurAchievement from '../Components/OurAchievement'
import Journey from './Journey'
const Home = () => {
  return (
    <div>
     <Body/>
     <AboutConsultancy/>
     <Service/>
     <Country/>
     <OurAchievement/>
     <Journey/>
     <Review/>
     <University/>
    </div>
  )
}

export default Home