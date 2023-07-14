/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
function PrivacyPolicyPage() {
  // render() {
  return (
    <div className="flex flex-col w-full h-screen bg-white text-black px-40">
      <h1 className="text-5xl text-left mt-20">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Privacy Policy
      </h1>
      <p className="text-left pt-10">
        {`At JoshitWorks.com, we are committed to protecting the privacy and
        security of our users personal information. This Privacy Policy
        outlines how we collect, use, and safeguard the data we gather from
        visitors and users of our website. By accessing and using our website,
        you agree to the practices described in this policy.`}
      </p>
      <h2 className="pt-10 text-2xl">1. Information We Collect</h2>
      <p className="text-left pt-2">
        {`1.1 Personal Information: When you place an order on our website, we collect certain personal information, including your name, email address, shipping address, and phone number. This information is necessary to process and deliver your order accurately.
`}
      </p>
      <p className="text-left pt-2">
        {`1.2 Usage Data: We may collect non-personal information about how users interact with our website, such as the pages visited, the date and time of access, and the device and browser used. This data helps us improve our website's performance and user experience.
        `}
      </p>
      <h2 className="pt-10 text-2xl">2. Use of Information</h2>
      <p className="text-left pt-2">
        {`2.1 Order Fulfillment: The personal information provided by users during the order process is used solely for the purpose of fulfilling their purchase, processing payments, and delivering the products to the specified address.
        `}
      </p>
      <p className="text-left pt-2">
        {`2.2 Communication: We may use your email address and phone number to communicate with you regarding your order status, delivery updates, and other relevant information related to your purchase.
`}
      </p>
      <p className="text-left pt-2">
        {`2.3 Website Improvement: Usage data and analytics collected may be used to analyze user behavior, identify patterns, and make improvements to our website's layout, content, and functionality.
`}
      </p>
      <p className="text-left pt-2">
        {`2.4 Marketing: With your consent, we may use your email address to send you promotional materials, newsletters, and special offers related to our products and services. You can opt-out of such communications at any time.
`}
      </p>
      <h2 className="pt-10 text-2xl">3. Data Protection</h2>
      <p className="text-left pt-2">
        {`3.1 Security Measures: We implement appropriate security measures to protect the personal information you provide us against unauthorized access, alteration, disclosure, or destruction.
`}
      </p>
      <p className="text-left pt-2">
        {`3.2 Third-party Access: We do not sell, trade, or rent your personal information to third parties. However, we may share certain data with trusted service providers and partners who assist us in fulfilling orders, processing payments, or improving our website. These third parties are bound by strict confidentiality agreements and are prohibited from using your personal data for any other purpose.
`}
      </p>
      <p className="text-left pt-2">
        {`3.3 Legal Compliance: We may disclose personal information if required to do so by law or in response to a valid legal request.
`}
      </p>
      <h2 className="pt-10 text-2xl">4. Cookies and Tracking Technologies</h2>
      <p className="text-left pt-2">
        {`We use cookies and similar tracking technologies to enhance your browsing experience on our website. Cookies are small text files stored on your device that allow us to remember your preferences, analyze website usage, and customize content. By using our website, you consent to the use of cookies in accordance with this policy.
`}
      </p>
      <h2 className="pt-10 text-2xl">5. Childrens Privacy</h2>
      <p className="text-left pt-2">
        {`Our website is not intended for use by children under the age of 16. We do not knowingly collect personal information from individuals under this age without parental consent. If you are a parent or guardian and believe your child has provided us with their information without your consent, please contact us to have it removed.
        `}
      </p>
      <p className="pt-10 pb-20">Date of last update: 16-July-2023</p>
    </div>
  );
  // }
}

export default PrivacyPolicyPage;
