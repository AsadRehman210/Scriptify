import React from 'react'
import Banner from '../components/common/Banner'
import JobOpenings from '../components/career/JobOpenings'

const JobOpening = () => {
    return (
        <section>
        <Banner
         heading= "Job Opportunities"
         subHeading="Our Resources rank among the top 10%"
         content= "Explore our current job openings and discover your next career opportunity at Scriptify" 
         />
        <JobOpenings />

        </section>
    )
}

export default JobOpening
