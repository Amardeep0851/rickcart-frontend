import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-700 mb-6">Terms &amp; Conditions</h1>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Introduction</h2>
          <p className="text-zinc-300 mt-2">These Terms govern your use of RickCart. By using the website you agree to these terms. If you do not agree, do not use the site.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Accounts</h2>
          <p className="text-zinc-300 mt-2">You are responsible for keeping your account secure and for all activity under your account. Provide accurate information and notify us of unauthorized use.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Orders &amp; Payments</h2>
          <p className="text-zinc-300 mt-2">All orders are subject to acceptance. Prices may change and we reserve the right to refuse or cancel orders. Payments are processed through secure gateways.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Shipping &amp; Delivery</h2>
          <p className="text-zinc-300 mt-2">Shipping times are estimates. We are not liable for delays outside our control. Tracking information will be provided when available.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Returns &amp; Refunds</h2>
          <p className="text-zinc-300 mt-2">Our return policy applies. Please visit the Return & Refund Policy page for details and steps to initiate a return.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Limitation of Liability</h2>
          <p className="text-zinc-300 mt-2">We are not liable for indirect or consequential losses. Our liability for direct damages is limited to the order value.</p>
        </section>

        <section className="mb-6 bg-zinc-800 border border-zinc-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Changes to Terms</h2>
          <p className="text-zinc-300 mt-2">We may update these terms. Continued use of the site indicates acceptance of the updated terms.</p>
        </section>

        <p className="text-zinc-500 text-sm mt-6">Questions? Contact support@rickcart.com</p>
      </div>
    </div>
  );
}
