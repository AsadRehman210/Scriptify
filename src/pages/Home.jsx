import React from 'react'
// import Slider from '../components/home/Slider'
import Services from '../components/home/Services'
import Testimonials from '../components/common/Testimonial'
import CareerDiscuss from '../components/common/CareerDiscuss'
import BusinessPotential from '../components/home/BusinessPotential'
import LogoSlider from '../components/home/LogoSlider'
import SampleSlider from '../components/home/SampleSlider'

const Home = () => {
    return (
        <main>
            <SampleSlider />
            <LogoSlider />
            <Services />
            <BusinessPotential />
            <Testimonials/>
            <CareerDiscuss />
            
        </main>
    )
}

export default Home
