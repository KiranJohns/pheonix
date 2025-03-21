import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="PHOENIX ARTS
Dhurga Nagar, Karamana, Thiruvananthapuram, Kerala 695002
 "
      />

      <Contact />
    </>
  );
};

export default ContactPage;
