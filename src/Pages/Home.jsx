import React from 'react'
import Country from "../Components/Country"
import MeetConsult from "../Components/MeetConsult"
import Review from "../Components/Review"
import Service from "../Components/Service"
import University from "../Components/University"
import ServecePeriod from "../Components/ServecePeriod"
import Body from "../Components/Body"
import AboutConsultancy from "../Components/AboutConsultancy"
const Home = () => {
  return (
    <div>
     <Body/>
     <Country/>
     <AboutConsultancy/>
     <Service/>
     <ServecePeriod/>
     <MeetConsult/>
     <University/>
     <Review/>
    </div>
  )
}

export default Home