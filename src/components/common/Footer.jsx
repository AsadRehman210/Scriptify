import React from 'react';
import Lhr from "../../assets/images/x30_4_Pakistan_tower-1.svg";
import newYork from "../../assets/images/new york.png";

const Footer = () => {
    return (
        <footer className='mt-auto'>
            {/* First Part of Footer */}
            <div className="bg-[#1AA54A] bg-opacity-90 text-white">
                <div className="container mx-auto px-6 xl:px-36 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                    {/* Lahore */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={Lhr} alt="Lahore" className="mx-auto h-16" />
                        </div>
                        <h3 className="font-bold">Lahore</h3>
                        <p className='text-base'>House#127-A, Block L, Johar Town, Lahore</p>
                        <p>Phone: +92 303 8974920</p>
                    </div>

                    {/* Headquarter */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={newYork} alt="Headquarter" className="mx-auto w-20 h-16" />
                        </div>
                        <h3 className="font-bold">Headquarter</h3>
                        <div className="flex items-center justify-center space-x-2 text-base">
                            <a href="https://maps.app.goo.gl/b57ZEYZT3vK5PdC38" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-map-marker-alt text-white text-2xl hover:text-blue-900 transition-all duration-300"></i>
                            </a>
                            <p>447 Broadway, 2nd Floor Suite #75, New York, New York</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Second Part of Footer */}
            <div className="bg-[#0d2144] text-white pt-8 pb-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 max-w-screen-lg md:px-8">

                    {/* Contact Info */}
                    <div className="flex items-center space-x-2 divide-x divide-white">
                        <a href="tel:+923038974920" className="hover:text-red-900">
                            <i className="fa-solid fa-phone text-xl"></i>
                        </a>

                        <div className='pl-2 space-y-2'>
                            <p>Have a query?</p>
                            <p><a href="tel:+923038974920" className="hover:underline">+92 (303) 8974920</a></p>
                        </div>
                    </div>

                    {/* Social Media and Links */}
                    <div className="flex flex-col items-center space-y-2">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-2xl hover:text-red-900"></i>
                            </a>
                            {/* <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-2xl hover:text-red-900"></i>
                            </a> */}
                            {/* <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook text-2xl hover:text-red-900"></i>
                            </a> */}
                            {/* <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-2xl hover:text-red-900"></i>
                            </a> */}
                        </div>

                        {/* Terms of Use and Privacy Policy */}
                        <div>
                            <p>Terms of Use – Privacy Policy.</p>
                        </div>
                    </div>

                    {/* Email Info */}
                    <div className="flex items-center space-x-2 divide-x divide-white">
                        <a href="mailto:contact@scriptify.org" className="hover:text-red-900">
                            <i className="fas fa-envelope text-xl"></i>
                        </a>

                        <div className='pl-2 space-y-2'>
                            <p>Email us at</p>
                            <p><a href="mailto:contact@scriptify.org" className="hover:underline">contact@scriptify.org</a></p>
                        </div>
                    </div>


                </div>

                {/* Footer Copyright */}
                <div className="text-center mt-12 pt-4 border-t border-white">
                    <p>© 2024-25 Scriptify Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
