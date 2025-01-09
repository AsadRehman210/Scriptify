import React from 'react';
import ContactForm from './ContactForm';

const CareerDiscuss = () => {
    return (
        <section className="relative custom-bg-contact">
            <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
            <div className='relative z-40 container mx-auto px-6 xl:px-36 py-16 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 '>
                {/* Left Side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
                        Ready to discuss your project with us? Get in touch with us now.
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
