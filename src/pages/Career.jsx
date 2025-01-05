import React from 'react'
import Banner from '../components/common/Banner'
import WorkEnvironment from '../components/career/WorkEnvironment'
import Perks from '../components/career/Perks'
import CareerDiscuss from '../components/common/CareerDiscuss'
import InterviewProcess from '../components/career/InterviewProcess';

const Career = () => {
    return (
        <main>
            <Banner 
                heading= "Our Most Important Asset — YOU."
                content= "Are you looking to kickstart your career in digital marketing and content creation? Join Scriptify where innovation meets opportunity. As a part of our talented team, you will collaborate with our experts who are dedicated to providing effective solutions to our clients. We celebrate creativity and promote innovation, and continuous learning in a supportive environment that boosts both personal and professional growth. "
                button="Job Openings"
                link="/career/jobopening"
            />          
            <WorkEnvironment />
            <Perks />
            <CareerDiscuss />
            <InterviewProcess />


        </main>
    )
}

export default Career
