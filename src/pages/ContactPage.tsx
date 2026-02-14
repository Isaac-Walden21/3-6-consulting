import { PageTransition } from "../components/animation";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import usePageTitle from "../hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle("Contact");
  return (
    <PageTransition>
      <ContactHero />
      <ContactInfo />
    </PageTransition>
  );
}
