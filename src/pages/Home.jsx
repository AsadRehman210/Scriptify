import React from 'react'
import Slider from '../components/home/Slider'
import Services from '../components/home/Services'
import Testimonials from '../components/common/Testimonial'
import CareerDiscuss from '../components/common/CareerDiscuss'
import BusinessPotential from '../components/home/BusinessPotential'
// import ScrollingLogos from '../components/home/BusinessPartners'

const Home = () => {
    return (
        <main>
            <Slider />
            {/* <ScrollingLogos /> */}
            <Services />
            <BusinessPotential />
            <Testimonials/>
            <CareerDiscuss />
            
        </main>
    )
}

export default Home
