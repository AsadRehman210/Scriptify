import React from 'react';
import { ContactUS } from '../components/common/ContactUS';

function ContactPageComponent() {
  // Define the content you want to pass as props
  const contactInfo = {
    title: "Contact Us",
    description: "At Scriptify, we specialize in delivering exceptional digital experiences. From web development to design and maintenance, our experts are here to help. Contact us today to learn more about how we can achieve your software development goals.",
    phoneNumber: "+923038974920",
    email: "scriptifyofficial@gmail.com",
    buttonText: "Explore Our Work"
  };

  return (
    <section>
      <ContactUS 
        title={contactInfo.title}
        description={contactInfo.description}
        phoneNumber={contactInfo.phoneNumber}
        email={contactInfo.email}
        buttonText={contactInfo.buttonText}
      />
    </section>
  );
}

export default ContactPageComponent;
