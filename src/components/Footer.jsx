import React from 'react';
import isl from "../assets/images/faisal-masjid-ropstam-solutions.png";
import Lhr from "../assets/images/x30_4_Pakistan_tower-1.svg";
import india from "../assets/images/taj-mahal-ropstam-solutions.png";
import newYork from "../assets/images/new york.png";

const Footer = () => {
    return (
        <footer className='mt-auto'>
            {/* First Part of Footer */}
            <div className="bg-black bg-opacity-90 text-white py-12">
                <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Islamabad */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={isl} alt="Islamabad" className="mx-auto w-auto h-16" />
                        </div>
                        <h3 className="font-bold">Islamabad</h3>
                        <p>DHA 2, Main G.T Road, Islamabad, Pakistan</p>
                        <p>Phone: 051-5411399</p>
                    </div>

                    {/* Lahore */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={Lhr} alt="Lahore" className="mx-auto h-16" />
                        </div>
                        <h3 className="font-bold">Lahore</h3>
                        <p>955 Service Road, Block L, Johar Town, Lahore</p>
                        <p>Phone: 042-37870956</p>
                    </div>

                    {/* Headquarter */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={newYork} alt="Headquarter" className="mx-auto w-20 h-16" />
                        </div>
                        <h3 className="font-bold">Headquarter</h3>
                        <p>Toronto, Ontario, CANADA</p>
                    </div>

                    {/* India */}
                    <div className="text-center">
                        <div className="text-4xl mb-2">
                            <img src={india} alt="India" className="mx-auto w-auto h-16" />
                        </div>
                        <h3 className="font-bold">India</h3>
                        <p>2nd Floor Indraprastha Tower 6, Mahatma Gandhi Rd, Indore, MP, 452007, India</p>
                    </div>
                </div>
            </div>

            {/* Second Part of Footer */}
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 max-w-screen-lg md:px-8">

                    {/* Contact Info */}
                    <div className="flex items-center space-x-2 divide-x divide-white">
                        <a href="tel:+923038974920" className="hover:text-red-900">
                            <i className="fa-solid fa-phone text-xl"></i>
                        </a>

                        <div className='pl-2 space-y-2'>
                            <p>Have a query?</p>
                            <p><a href="tel:+923038974920" className="hover:underline">+92 (303) 3038974920</a></p>
                        </div>
                    </div>

                    {/* Social Media and Links */}
                    <div className="flex flex-col items-center space-y-2">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin text-2xl hover:text-red-900"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram text-2xl hover:text-red-900"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook text-2xl hover:text-red-900"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/scriptifyofficial/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-2xl hover:text-red-900"></i>
                            </a>
                        </div>

                        {/* Terms of Use and Privacy Policy */}
                        <div>
                            <p>Terms of Use – Privacy Policy.</p>
                        </div>
                    </div>

                    {/* Email Info */}
                    <div className="flex items-center space-x-2 divide-x divide-white">
                        <a href="mailto:scriptifyofficial@gmail.com" className="hover:text-red-900">
                            <i className="fas fa-envelope text-xl"></i>
                        </a>

                        <div className='pl-2 space-y-2'>
                            <p>Email us at</p>
                            <p><a href="mailto:scriptifyofficial@gmail.com" className="hover:underline">scriptifyofficial@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="text-center mt-12">
                    <p>© 2024 Ropstam Solutions Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
