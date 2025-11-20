
import Header from "@/components/cotact-us/header";
import InfoSection from "@/components/cotact-us/info-section";
import ContactForm from "@/components/cotact-us/contact-form";

export default function ContactUs() {
  return (
    <div className="min-h-screen mt-4 mx-4 lg:mx-auto rounded-md pb-10 overflow-hidden">
      <Header />
      <div className="px-4">
      <InfoSection />
      <ContactForm />
      </div>
    </div>
  );
}
