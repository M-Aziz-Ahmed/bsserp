// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
        {/* Our Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our service</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px'}}></div>
          <div className="space-y-2">
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Manufacturing ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Retail ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Distribution ERP Software</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Education ERP Software</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">ERP Solution for Non-Profit</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Agriculture ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Healthcare ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">HR Software</Link></div>
          </div>
        </div>

        {/* Let us help you */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let us help you</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px'}}></div>
          <div className="space-y-2">
            <div><Link href="/about" className="text-gray-600 hover:text-gray-900 nav-link">About</Link></div>
            <div><Link href="/case-studies" className="text-gray-600 hover:text-gray-900 nav-link">Case Studies</Link></div>
            <div><Link href="/clients" className="text-gray-600 hover:text-gray-900 nav-link">Clients Stories</Link></div>
            <div><Link href="/integration" className="text-gray-600 hover:text-gray-900 nav-link">Integration</Link></div>
            <div><Link href="/services" className="text-gray-600 hover:text-gray-900 nav-link">Services</Link></div>
            <div><Link href="/privacy" className="text-gray-600 hover:text-gray-900 nav-link">Privacy Policy</Link></div>
            <div><Link href="/contact" className="text-gray-600 hover:text-gray-900 nav-link">Contact Us</Link></div>
          </div>
        </div>

        {/* Countries */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Countries</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px'}}></div>
          <div className="space-y-2">
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Saudia Arabia</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">United States of America</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">United Arab Emirates</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Pakistan</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Oman</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Qatar</Link></div>
          </div>
        </div>

        {/* Reach out to us */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Reach out to us</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px'}}></div>
          <div className="space-y-2">
            <div><Link href="mailto:info@sowaan.com" className="text-gray-600 hover:text-gray-900 nav-link">info@sowaan.com</Link></div>
            <div className="text-light">+92 213 4303750</div>
            <div className="text-light">+92 321 2897837</div>
            <div className="text-light">+92 335 6661251</div>
            <div className="text-light">$01/802 Mehdi Tower, Shahrah-e Faisal, Kanechi City, Sindh, Pakistan</div>
          </div>
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