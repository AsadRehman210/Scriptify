import React from "react";

const CEOIntro = () => {
    return (
        <div className="bg-blue-500 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="w-full lg:w-1/2 text-center mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                        Message
                    </h2>
                    <p className="text-xl lg:text-2xl mb-6">
                        CEO, Scriptify
                    </p>
                    <p className="text-lg lg:text-xl leading-relaxed text-justify">
                        “Over the past year, I have overflowed my heart into building and growing Scriptify. I’m extremely proud of the talented team we have selected, the high-quality work they deliver, and the supportive environment we have created for our employees. Our commitment to excellence and client satisfaction drives everything we do. It's an honor to lead this organization and witness the positive impact we created for businesses globally.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CEOIntro;
