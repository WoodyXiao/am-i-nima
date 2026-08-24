import { ContactSection } from "./ContactSection";
import { FooterCopyright } from "./FooterCopyright";
import { ResponsiveFooter } from "./ResponsiveFooter";

export function SiteFooter() {
  return (
    <ResponsiveFooter>
      <ContactSection />
      <FooterCopyright />
    </ResponsiveFooter>
  );
}
