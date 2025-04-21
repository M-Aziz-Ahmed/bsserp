// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
        {/* Our Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our service</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Manufacturing ERP Solution</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Retail ERP Solution</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Distribution ERP Software</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Education ERP Software</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">ERP Solution for Non-Profit</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Agriculture ERP Solution</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Healthcare ERP Solution</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">HR Software</Link></li>
          </ul>
        </div>

        {/* Let us help you */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let us help you</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900 nav-link">About</Link></li>
            <li><Link href="/case-studies" className="text-gray-600 hover:text-gray-900 nav-link">Case Studies</Link></li>
            <li><Link href="/clients" className="text-gray-600 hover:text-gray-900 nav-link">Clients Stories</Link></li>
            <li><Link href="/integration" className="text-gray-600 hover:text-gray-900 nav-link">Integration</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-gray-900 nav-link">Services</Link></li>
            <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 nav-link">Privacy Policy</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 nav-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Countries</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Saudia Arabia</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">United States of America</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">United Arab Emirates</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Pakistan</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Oman</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Qatar</Link></li>
          </ul>
        </div>

        {/* Reach out to us */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Reach out to us</h3>
          <ul className="space-y-2">
            <li><Link href="mailto:info@sowaan.com" className="text-gray-600 hover:text-gray-900 nav-link">info@sowaan.com</Link></li>
            <li className="text-light">+92 213 4303750</li>
            <li className="text-light">+92 321 2897837</li>
            <li className="text-light">+92 335 6661251</li>
            <li className="text-light">$01/802 Mehdi Tower, Shahrah-e Faisal, Kanechi City, Sindh, Pakistan</li>
          </ul>
        </div>

        {/* Mobile App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
          <div className="space-y-4">
            <button className="block w-full max-w-[200px]">
              <img src="/app-store-badge.svg" alt="Download on the App Store" className="w-full h-auto" />
            </button>
            <button className="block w-full max-w-[200px]">
              <img src="/google-play-badge.png" alt="Get it on Google Play" className="w-full h-auto" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Sowaan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;