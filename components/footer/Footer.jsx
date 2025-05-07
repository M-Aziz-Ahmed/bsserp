// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
        {/* Our Service */}
        <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Our service</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">24 / 7 Support</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Installation</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Regular Updates</Link></div>
          </div>
        </div>

        {/* Our Service */}
        <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Our Modules</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Manufacturing ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Retail ERP Solution</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">Distribution ERP Software</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">ERP Solution for Non-Profit</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link">HR Software</Link></div>
          </div>
        </div>

        {/* Let us help you */}
        <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Let us help you</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="/about-us" className="text-gray-600 hover:text-gray-900 nav-link">About</Link></div>
            <div><Link href="/case-studies" className="text-gray-600 hover:text-gray-900 nav-link">Case Studies</Link></div>
            <div><Link href="/clients" className="text-gray-600 hover:text-gray-900 nav-link">Clients Stories</Link></div>
            <div><Link href="/services" className="text-gray-600 hover:text-gray-900 nav-link">Services</Link></div>
            <div><Link href="/privacy" className="text-gray-600 hover:text-gray-900 nav-link">Privacy Policy</Link></div>
            <div><Link href="/contact" className="text-gray-600 hover:text-gray-900 nav-link">Contact Us</Link></div>
          </div>
        </div>

     
        {/* Reach out to us */}
        <div className="col-span-1 md:col-span-2 p-2 px-3 shadow rounded-5">
          <h3 className="text-lg font-semibold mb-4">Reach out to us</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="mailto:info@bizsoftsolution.net" className="text-gray-600 hover:text-gray-900 nav-link">info@bizsoftsolution.net</Link></div>
            <div className="text-light">+92 300 4919926</div>
            <div className="text-light">A1, 409, A1 Haider Rd, Township, Lahore, 54000</div>
          </div>
        </div>

        {/* Mobile App */}
        <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>

          <div className="my-4 d-flex gap-4 flex-column w-75">
              * Comming Soon *
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} BSSERP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;