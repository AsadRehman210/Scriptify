import React from 'react';
import { ContactUS } from '../components/common/ContactUS';

function ContactPageComponent() {
  // Define the content you want to pass as props
  const contactInfo = {
    title: "Contact Us",
    description: "At Scriptify, we specialize in delivering exceptional YouTube automation experiences. From scriptwriting to video editing and YouTube SEO, our experts are here to help. Contact us today to learn more about how we can help achieve your YouTube channel's success goals.",
    phoneNumber: "+923038974920",
    email: "contact@scriptify.org",
    buttonText: "Explore Our Work",
    link:"/services"
  };

  return (
    <section>
      <ContactUS 
        title={contactInfo.title}
        description={contactInfo.description}
        phoneNumber={contactInfo.phoneNumber}
        email={contactInfo.email}
        buttonText={contactInfo.buttonText}
        link={contactInfo.link}
      />
    </section>
  );
}

export default ContactPageComponent;
