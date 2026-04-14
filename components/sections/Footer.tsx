// components/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-white/10">

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <p className="font-display text-lg font-semibold text-text">
              DS Overseas
            </p>
            <p className="mt-2 text-sm text-text-muted leading-6">
              Helping students choose the right country, university, and path —
              without confusion or wasted time.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-text">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li><a href="#services" className="hover:text-text">University Shortlisting</a></li>
              <li><a href="#services" className="hover:text-text">Application Support</a></li>
              <li><a href="#services" className="hover:text-text">Visa Guidance</a></li>
              <li><a href="#services" className="hover:text-text">Exam Preparation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-text">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li><a href="#process" className="hover:text-text">Process</a></li>
              <li><a href="#countries" className="hover:text-text">Countries</a></li>
              <li><a href="#faq" className="hover:text-text">FAQ</a></li>
              <li><a href="#final-cta" className="hover:text-text">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-text">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              <li>📞 +91 00000 00000</li>
              <li>📧 info@dsoverseas.com</li>
              <li>📍 Hyderabad, India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-xs text-text-faint">
            © {new Date().getFullYear()} DS Overseas. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex gap-4 text-xs text-text-muted">
            <a href="#" className="hover:text-text">Privacy Policy</a>
            <a href="#" className="hover:text-text">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}