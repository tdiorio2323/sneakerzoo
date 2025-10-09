import Link from "next/link";
import { Instagram } from "lucide-react";
import { BUSINESS, NAVIGATION, SOCIAL_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">{BUSINESS.shortName}</h3>
            <p className="text-sm text-white/60">{BUSINESS.tagline}</p>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Visit Us</h4>
            <address className="text-sm text-white/60 not-italic space-y-1">
              <p>{BUSINESS.addressLine}</p>
              <p>
                {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
              </p>
              <p className="pt-2">
                {BUSINESS.hours[0].day}: {BUSINESS.hours[0].open}–
                {BUSINESS.hours[0].close}
              </p>
              <p>
                {BUSINESS.hours[1].day}: {BUSINESS.hours[1].open}–
                {BUSINESS.hours[1].close}
              </p>
            </address>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
