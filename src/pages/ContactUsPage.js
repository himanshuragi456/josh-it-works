/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';

function ContactUsPage() {
  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-4">
        We value your feedback and are here to assist you. If you have any questions, concerns, or suggestions, please feel free to contact us using the details below. Our customer support team will be happy to help you.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact Information</h3>
      <p className="mb-4">
        <strong>Email:</strong>
        {' '}
        hirehimanshuragi@gmail.com
      </p>
      <p className="mb-4">
        <strong>Phone:</strong>
        {' '}
        +91 9301420919
      </p>
      <p className="mb-4">
        <strong>Address:</strong>
        {' '}
        B-4, Krishnani colony, B.G Road, Guna(M.P.) - 473001
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Business Hours</h3>
      <p className="mb-4">
        Our customer support team is available during the following business hours:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Monday to Friday: 9:00 AM - 5:00 PM (Items)</li>
        <li>Saturday and Sunday: Closed</li>
      </ul>
    </div>
  );
}

export default ContactUsPage;
