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
                heading="Welcome To Scriptify"
                content="Based in Lahore Punjab, Scriptify has become a leader in providing content creation services. We have an experienced professional team specializing in YouTube SEO, scriptwriting, video editing, thumbnail designing, and voice-overs. We are dedicated to providing high-quality work that helps our clients drive exceptional results."
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
