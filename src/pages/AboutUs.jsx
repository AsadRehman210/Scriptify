import React from 'react'
import Banner from '../components/common/Banner'
import Experience from '../components/about/Experience'
import DigitalBeauty from '../components/about/DigitalBeauty'
import CEOIntro from '../components/about/CEOIntro'
import Headquarter from '../components/about/Headquater'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from '../components/common/Testimonial'

const AboutUs = () => {
    return (
        <main>
            <Banner
                heading="About Us"
                content="Scriptify is a leading Canadian IT solutions company staffed by a team of skilled professionals in web development, mobile app development, UI/UX design, and blockchain development. We specialize in providing comprehensive software solutions and services, expertly handling complex projects to deliver outstanding results for our clients."
                button="Let's Get Started"
                btnRightContent="Explore Services"

            />
            <Experience />
            <DigitalBeauty />
            <CEOIntro/>
            <Headquarter />
            <Testimonials />

        </main>
    )
}

export default AboutUs
