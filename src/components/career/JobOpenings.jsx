import React, { useState } from 'react';

const JobOpenings = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const jobsData = [
        {
            title: 'Development Lead (Web & Mobile App)',
            location: '955 Service Road, Block L, Johar Town, Lahore',
        },
        {
            title: 'MERN Stack Developer',
            location: 'Islamabad/Lahore',
        },
        {
            title: 'UI/UX Team Lead',
            location: '955 Service Road, Block L, Johar Town, Lahore',
        },
    ];

    const categories = ['All Categories', 'Development', 'Design', 'Marketing'];
    const locations = ['All Locations', 'Lahore', 'Islamabad', 'Karachi'];

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Job <span className="text-blue-500">Openings</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 space-x-0 md:space-x-6 md:space-y-0">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="border p-2 rounded w-full md:w-1/3 md:flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border bg-white p-2 rounded w-full md:w-1/3 md:flex-1"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <select
                        className="border bg-white p-2 rounded w-full md:w-1/3 md:flex-1"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobsData
                        .filter((job) =>
                            job.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((job, index) => (
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
                                <div className="mt-auto">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                                        See Details
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default JobOpenings;
