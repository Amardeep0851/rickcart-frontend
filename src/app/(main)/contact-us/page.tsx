import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 md:px-12 py-16">

      {/* TOP SECTION (TITLE + SUBTEXT) */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold text-orange-700">Contact Us</h1>
        <p className="text-zinc-300 mt-2 text-lg">
          Questions, support, feedback — we're here to help.
        </p>
      </div>

      {/* 3 INFO BOXES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        {/* Address */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-700/10 transition">
          <MapPin className="size-10 mx-auto mb-4 text-orange-700" />
          <h3 className="text-lg font-semibold mb-1">Our Address</h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            123 Street Name,<br />
            Jalandhar, Punjab 144004
          </p>
        </div>

        {/* Phone */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-700/10 transition">
          <Phone className="size-10 mx-auto mb-4 text-orange-700" />
          <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
          <p className="text-zinc-300 text-sm">+91 98765-43210</p>
          <p className="text-zinc-300 text-sm">Mon–Sat, 10 AM – 7 PM</p>
        </div>

        {/* Email */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-700/10 transition">
          <Mail className="size-10 mx-auto mb-4 text-orange-700" />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-zinc-300 text-sm">support@rickcart.com</p>
          <p className="text-zinc-300 text-sm">We reply within 24 hours.</p>
        </div>

      </div>

      {/* FORM + SIDE TEXT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT — FORM */}
        <form className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:border-orange-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:border-orange-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-100 focus:outline-none focus:border-orange-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT — TEXT SECTION */}
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-5xl font-semibold text-orange-700 mb-4 leading-tight">
            Contact Us
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-lg">
            Need to get in touch with us? Either fill out the form with your
            inquiry or contact us using the phone number or email shown above.
            We will try our best to solve your problem as soon as possible.
          </p>
        </div>

      </div>
    </div>
  );
}
