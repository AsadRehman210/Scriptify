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
                content="Headquartered in New York, Scriptify operates a production team based in Lahore and other cities across Pakistan. Specializing in content creation services, our experienced team excels in scriptwriting, voice-over, video editing, thumbnail design, and YouTube SEO work. Dedicated to delivering high-quality services, we help our clients achieve exceptional results."
                button="Let's Get Started"
                btnRightContent="Explore Services"
                link="/contact"
                btnRightLink="/services"

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
