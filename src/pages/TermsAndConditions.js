/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
function TermsAndConditionsPage() {
  // render() {
  return (
    <div className="flex flex-col w-full h-screen bg-white text-black px-40">
      <h1 className="text-5xl text-left mt-20">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Terms and Conditions
      </h1>
      <p className="text-left pt-10">
        {`Welcome to JoshitWorks.com! Before you proceed to use our website or make a purchase, we kindly request you to review and understand the following Terms and Conditions. By accessing and using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please refrain from using our website.
        `}
      </p>
      <h2 className="pt-10 text-2xl">1. Use of the Website</h2>
      <p className="text-left pt-2">
        {`1.1 Age Restriction: Our website is intended for use by individuals who are at least 16 years old. If you are under 16, please do not use this website without the consent and supervision of a parent or guardian.
        `}
      </p>
      <p className="text-left pt-2">
        {`1.2 Website Access: We grant you a limited, non-exclusive, and non-transferable right to access and use our website for personal and non-commercial purposes. You may not use our website for any illegal or unauthorized purpose.
        `}
      </p>
      <p className="text-left pt-2">
        {`1.3 Account Creation: To place an order on our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account.
        `}
      </p>
      <p className="text-left pt-2">
        {`1.4 Prohibited Activities: When using our website, you agree not to engage in any activities that may:

Violate any applicable laws, regulations, or third-party rights.
Interfere with or disrupt the functionality of our website or its related services.
Attempt to gain unauthorized access to any portion of our website, server, or networks.
`}
      </p>
      <h2 className="pt-10 text-2xl">2. Product Information and Pricing</h2>
      <p className="text-left pt-2">
        {`2.1 Product Descriptions: We make every effort to provide accurate and up-to-date product descriptions on our website. However, we do not guarantee the completeness, accuracy, or reliability of the information provided. The images shown on the website are for illustrative purposes only and may differ slightly from the actual product.
        `}
      </p>
      <p className="text-left pt-2">
        {`2.2 Pricing: The prices displayed on our website are in [insert currency] and are subject to change without notice. We reserve the right to modify or discontinue any product or service without liability at any time.
        `}
      </p>
      <h2 className="pt-10 text-2xl">3. Order and Payment</h2>
      <p className="text-left pt-2">
        {`3.1 Order Acceptance: By placing an order on our website, you make an offer to purchase the products in your cart. We reserve the right to accept or decline your order for any reason, including but not limited to product availability, errors in product information, or suspicion of fraudulent activity.
        `}
      </p>
      <p className="text-left pt-2">
        {`3.2 Payment: We accept payment through [insert accepted payment methods]. By providing your payment information, you represent and warrant that you are authorized to use the selected payment method.
        `}
      </p>
      <h2 className="pt-10 text-2xl">4. Delivery and Shipping</h2>
      <p className="text-left pt-2">
        {`4.1 Delivery: We will make every effort to deliver your order within the estimated timeframe. However, we are not liable for any delays that may occur due to unforeseen circumstances or third-party shipping providers.
        `}
      </p>
      <p className="text-left pt-2">
        {`4.2 Shipping: Shipping costs, if applicable, will be clearly stated during the checkout process. Customers are responsible for providing accurate shipping information. Any additional charges incurred due to incorrect shipping details will be the responsibility of the customer.
        `}
      </p>
      <p className="pt-10 pb-20">Date of last update: 16-July-2023</p>
    </div>
  );
  // }
}

export default TermsAndConditionsPage;
