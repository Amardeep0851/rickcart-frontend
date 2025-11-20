import React from 'react';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-700 mb-6">Return &amp; Refund Policy</h1>

        <p className="text-zinc-300 mb-6">We want you to be happy with every purchase. If you are not satisfied, here are the simple rules and steps to follow.</p>

        <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Return Window</h2>
          <p className="text-zinc-300">Items may be returned within <strong>10 days</strong> of delivery for a full refund if they meet the conditions below.</p>
        </section>

        <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Return Conditions</h2>
          <ul className="list-disc list-inside text-zinc-300">
            <li>Item unused, unwashed, and in original packaging with tags attached.</li>
            <li>Proof of purchase (order number / invoice) provided.</li>
            <li>Electronics must include all accessories and original packaging.</li>
          </ul>
        </section>

        <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Non-returnable Items</h2>
          <p className="text-zinc-300">Certain items cannot be returned: perishable goods, customized items, and opened personal-care products.</p>
        </section>

        <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">How to Request a Return</h2>
          <ol className="list-decimal list-inside text-zinc-300">
            <li>Open your account &gt; Orders &gt; select the order and choose "Return".</li>
            <li>Follow the on-screen instructions and provide a reason.</li>
            <li>Pack the item securely and drop it at the designated return point or arrange a pickup if offered.</li>
          </ol>
        </section>

        <section className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Refund Processing</h2>
          <p className="text-zinc-300">Once we receive and inspect the item, refunds are processed within <strong>3–7 business days</strong> to the original payment method. You will receive a confirmation email when the refund is issued.</p>
        </section>

        <p className="text-zinc-500 text-sm mt-6">If you have questions about returns, contact support@rickcart.com or call +91 98765-43210.</p>
      </div>
    </div>
  );
}
