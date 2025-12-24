"use client"; // required if using hooks like useFormik

import ContactForm from "@/Components/ContactForm"; // adjust path

const ContactFormPage = () => {
  return (
    <div className="h-[80vh] w-full mb-10">
      <ContactForm />
    </div>
  );
};

export default ContactFormPage;
