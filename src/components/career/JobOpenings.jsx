import React from 'react';

const JobOpenings = () => {

    const jobsData = [
        {
            title: 'Scriptwriter',
            location: 'Remote',
        },
        {
            title: 'Video Editor',
            location: 'Remote',
        },
        {
            title: 'Voice Over Artist (Native English Speaker)',
            location: 'Remote',
        },
        {
            title: 'Thumbnail Designer',
            location: 'Remote',
        },
        {
            title: 'YouTube SEO Expert',
            location: 'Remote',
        },
        {
            title: 'YouTube Channel Manager',
            location: 'Remote',
        },
    ];

    return (
        <section className="bg-white min-h-screen text-[#0d2144]">
            <div className="container mx-auto px-6 xl:px-36 py-16">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Job <span className="text-blue-500">Openings</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobsData.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded shadow-sm border flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">
                                {job.title}
                            </h3>
                            <p className="text-gray-600 flex items-center mb-4">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {job.location}
                            </p>
                            <p className="mt-auto text-center text-sm">
                                Send your resume at:
                                <br />

                                <span className="text-lg text-blue-600 hover:text-blue-800 transition duration-300">
                                    <a href="mailto:contact@scriptify.org">
                                        contact@scriptify.org
                                    </a>
                                </span>
                                <br />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobOpenings;
