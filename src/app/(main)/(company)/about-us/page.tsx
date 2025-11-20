import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">About RickCart</h1>
            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              RickCart is an independent, single-owner e-commerce store built to
              deliver quality products across categories with clear pricing and
              dependable support. We focus on simple shopping, honest service,
              and fast delivery.
            </p>

            <section className="grid gap-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">Our Mission</h3>
                <p className="text-zinc-300 mt-1">To make everyday shopping convenient and reliable — by curating quality products, keeping costs fair, and offering real support when you need it.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-100">What Makes Us Different</h3>
                <ul className="text-zinc-300 mt-2 list-disc list-inside">
                  <li>Hand-picked selection across categories</li>
                  <li>Transparent pricing and fast dispatch</li>
                  <li>Responsive customer support via phone and email</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-100">Our Promise</h3>
                <p className="text-zinc-300 mt-1">Secure checkout, clear returns, and honest communication — every order.</p>
              </div>
            </section>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-zinc-700">
            <Image
              src={'/mnt/data/f9552075-cfef-4785-bdcd-9fe295974d6c.png'}
              alt="About RickCart"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h4 className="text-orange-700 font-semibold">Founded</h4>
            <p className="text-zinc-300 mt-2">2022 — single-owner store built for honest retail.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h4 className="text-orange-700 font-semibold">Fast Shipping</h4>
            <p className="text-zinc-300 mt-2">Local and national delivery with clear tracking updates.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
            <h4 className="text-orange-700 font-semibold">Support</h4>
            <p className="text-zinc-300 mt-2">Phone & email support, reply within 24 hours on business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
