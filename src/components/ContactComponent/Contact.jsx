import React from 'react';
import ContactMessage from './ContactMessage';
import ContactInformation from './ContactInformation';
import ContactUs from '../HomeComponent/ContactUs';
import Map from './Map';

function Contact() {
  return (
    <>
      <ContactMessage/>
      <ContactInformation/>
      <ContactUs/>
      <Map/>
    </>
  )
}

export default Contact
