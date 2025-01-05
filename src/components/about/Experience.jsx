import React from "react";

const Experience = () => {
    const stats = [
        {
            year: '6+ Years',
            title: 'Of Experience',
            description: 'For 6 years, we have been providing exceptional content creation services. Whether you\'re a startup or an established one, our knowledge and experience help everyone.'
        },
        {
            year: '100+',
            title: 'Successful Projects',
            description: 'Each project we had, was a new opportunity for us to craft something extraordinary. Our team puts extra effort and creativity into each project to bring your vision into reality.'
        },
        {
            year: '10+',
            title: 'Skilled Professional Team',
            description: 'Our talented team has seasoned IT experts who bring over a decade of industry experience to every project.'
        },
        {
            year: '30+',
            title: 'Satisfied Clients',
            description: 'At the core of our success lies our dedication and understanding and fulfilling our client\'s unique needs.'
        }
    ];
    

    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 xl:px-36 py-16 flex flex-wrap items-center">
                {/* Stats Section */}
                <div className="w-full lg:w-1/2 flex flex-wrap">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/2 pr-4 mb-6">
                            <h3 className="text-blue-600 text-lg font-semibold">{stat.year}</h3>
                            <h2 className="text-xl font-bold mt-2">{stat.title}</h2>
                            <p className="mt-2 text-gray-600 text-justify">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="w-full lg:w-1/2 pr-4 mb-6">
                    <div className="relative" style={{ paddingTop: '56.25%' }}> 
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/UzmFSDI60Ig"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
