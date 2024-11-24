import React from 'react';
import ContactForm from '../ContactForm';

const CareerDiscuss = () => {
    return (
        <section className="bg-blue-500 text-white py-16">
            <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10'>
                {/* Left Side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
                        Ready to discuss your project with us? Get in touch today to get started.
                    </h3>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default CareerDiscuss;
