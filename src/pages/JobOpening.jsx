import React from 'react'
import Banner from '../components/common/Banner'
import JobOpenings from '../components/career/JobOpenings'

const JobOpening = () => {
    return (
        <section>
        <Banner
         heading= "Job Opportunities"
         subHeading="Our software developers rank among the top 1%"
         content= "Explore our current job openings and discover your next career opportunity at Ropstam" 
         button="Let's get started"

         />
        <JobOpenings />

        </section>
    )
}

export default JobOpening
