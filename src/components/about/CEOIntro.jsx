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
                        “For the past ten years, I have devoted myself wholeheartedly to
                        building and expanding this company. It brings me great pride to see
                        the fantastic team we have built, the outstanding work they produce,
                        and the supportive atmosphere we’ve created for our clients to bring
                        their ideas to life. Our team’s commitment to excellence and client
                        satisfaction has been our guiding principle, driving us to deliver
                        top-notch services that meet and exceed expectations. I am humbled
                        and honored to have led this organization to where it stands today,
                        and I look forward to continuing our journey of growth and success.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CEOIntro;
