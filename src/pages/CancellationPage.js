/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function CancellationAndRefundPage() {
  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">
        Cancellation and Refund Policy
      </h2>
      <p className="mb-4">
        Thank you for shopping with us at JoshitWorks.com. We understand that
        sometimes you may need to cancel an order or request a refund. Below, we
        have outlined our Cancellation and Refund Policy to provide you with
        clear guidelines on the process.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Cancellation Policy</h3>
      <p className="mb-4">
        <strong>1. Cancellation Before Shipping:</strong>
        {' '}
        If you wish to cancel
        an order before it has been shipped, please contact our customer support
        team as soon as possible. We will do our best to accommodate your
        request.
      </p>
      <p className="mb-4">
        <strong>2. Cancellation After Shipping:</strong>
        {' '}
        Once an order has been
        shipped, it cannot be canceled. In such cases, you may choose to
        initiate a return as per our Return Policy.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Refund Policy</h3>
      <p className="mb-4">
        <strong>1. Eligibility for Refunds:</strong>
        {' '}
        To be eligible for a
        refund, the item must be unused, in its original packaging, and in the
        same condition as you received it.
      </p>
      <p className="mb-4">
        <strong>2. Refund Process:</strong>
        {' '}
        Once we receive and inspect the
        returned item, we will notify you about the approval or rejection of
        your refund. If approved, the refund will be processed to the original
        method of payment within 7 days from the approval date.
      </p>
      <p className="mb-4">
        <strong>3. Non-Refundable Items:</strong>
        {' '}
        Some items are non-refundable,
        Such items will be labelled as non-refundable at the time of checkout.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
      <p className="mb-4">
        If you have any questions or concerns regarding our Cancellation and
        Refund Policy, please don't hesitate to contact our customer support
        team at hirehimanshuragi@gmail.com or +91 9301420919.
      </p>
    </div>
  );
}

export default CancellationAndRefundPage;
