import React from 'react'
import Banner from '../components/Banner'
import WorkEnvironment from '../components/career/WorkEnvironment'
import Perks from '../components/career/Perks'
import CareerDiscuss from '../components/common/CareerDiscuss'
import InterviewProcess from '../components/career/InterviewProcess';

const Career = () => {
    return (
        <main>
            <Banner 
                heading= "Our most valuable asset — YOU."
                content= "Looking for an exciting career in software development and technology? Join Scriptify and become a part of our dynamic team of experts dedicated to creating innovative solutions for our clients. We value creativity, collaboration, and continuous learning and offer a supportive work environment that encourages personal and professional growth. Explore our current job openings and start your journey with Scriptify today!"
                button="Job Openings"
            />          
            <WorkEnvironment />
            <Perks />
            <CareerDiscuss />
            <InterviewProcess />


        </main>
    )
}

export default Career
