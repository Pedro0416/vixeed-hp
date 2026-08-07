import { InstagramIcon } from "@/components/legacy/InstagramIcon";
import { footerLinks } from "@/lib/nav";
import Link from "next/link";

export function LegacyFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">Vixeed</div>
          <div className="footer-links">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <a
              href="https://www.instagram.com/vixeed_co_ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              公式Instagram
            </a>
            <a
              href="https://www.instagram.com/shoma_vixeed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              代表Instagram
            </a>
            <a href="mailto:office@vixeed.jp">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              office@vixeed.jp
            </a>
            <a href="tel:08032791108">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              080-3279-1108
            </a>
          </div>
        </div>
        <div className="footer-copy">© 2025 株式会社 Vixeed</div>
      </div>
    </footer>
  );
}
