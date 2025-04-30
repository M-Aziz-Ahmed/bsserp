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
        <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Let us help you</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
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
        {/* <div className='p-2 px-3 shadow rounded-5'>
          <h3 className="text-lg font-semibold mb-4">Countries</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3"><span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
                <rect width="600" height="300" fill="#245C36" />
                <path d="M130,150h340a10,10 0 0 1 10,10v30a10,10 0 0 1-10,10H130a10,10 0 0 1-10-10v-30A10,10 0 0 1 130,150z" fill="#fff" />
                <path d="M160,150h40v40h-40z" fill="#fff" />
                <path d="M180,150v40" stroke="#245C36" strokeWidth="10" />
                <path d="M160,170h40" stroke="#245C36" strokeWidth="10" />
                <text x="220" y="175" fontFamily="Arial" fontSize="20" fill="#fff" fontWeight="bold">لا إله إلا الله محمد رسول الله</text>
              </svg>
            </span> Saudia Arabia</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3"><span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 400" width="20" height="10">
                <rect width="760" height="400" fill="#B22234" />
                <rect width="760" height="222.2" fill="#3C3B6E" y="0" />
                <g fill="#fff" transform="scale(0.8)">
                  <g id="s">
                    <path id="a" d="M0,0v1h1v-1z" />
                    <path id="b" d="M0,0v1h1v-1" transform="rotate(18)" />
                    <use href="#b" transform="rotate(36)" />
                    <use href="#b" transform="rotate(54)" />
                    <use href="#b" transform="rotate(72)" />
                  </g>
                  <use href="#s" transform="rotate(72)" />
                  <use href="#s" transform="rotate(144)" />
                  <use href="#s" transform="rotate(216)" />
                  <use href="#s" transform="rotate(288)" />
                </g>
                <g fill="#fff">
                  <rect x="0" y="0" width="760" height="40" />
                  <rect x="0" y="80" width="760" height="40" />
                  <rect x="0" y="160" width="760" height="40" />
                  <rect x="0" y="240" width="760" height="40" />
                  <rect x="0" y="320" width="760" height="40" />
                  <rect x="0" y="400" width="760" height="40" />
                </g>
              </svg>
            </span> United States of America</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3"><span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
                <rect width="600" height="300" fill="#FF0000" />
                <rect width="150" height="300" fill="#00732F" />
                <rect x="150" width="450" height="100" fill="#fff" />
                <rect x="150" y="100" width="450" height="100" fill="#000" />
              </svg>
            </span> United Arab Emirates</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3"><span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
                <rect width="600" height="300" fill="#01411C" />
                <rect width="200" height="300" fill="#fff" />
                <circle cx="100" cy="150" r="60" fill="#01411C" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(120 100 150)" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(180 100 150)" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(240 100 150)" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(300 100 150)" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(0 100 150)" />
                <path d="M100,90l20,60h-40z" fill="#fff" transform="rotate(60 100 150)" />
              </svg>
            </span> Pakistan</Link></div>
            <div><Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3"><span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
                <rect width="600" height="300" fill="#fff" />
                <rect x="0" y="0" width="200" height="300" fill="#DB161B" />
                <rect x="200" y="0" width="400" height="100" fill="#fff" />
                <rect x="200" y="100" width="400" height="100" fill="#DB161B" />
                <rect x="200" y="200" width="400" height="100" fill="#046A38" />
                <path d="M100,150l-50-30v60z" fill="#fff" />
                <path d="M100,150l50-30v60z" fill="#fff" />
                <circle cx="100" cy="150" r="20" fill="#DB161B" />
                <circle cx="100" cy="150" r="10" fill="#fff" />
              </svg>
            </span> Oman</Link></div>
            <div>
              <Link href="#" className="text-gray-600 hover:text-gray-900 nav-link d-flex align-items-center gap-3">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="20" height="10">
                    <rect width="600" height="300" fill="#8D1B3D" />
                    <path d="M0,0h150v300H0z M150,0h450v300H150z" fill="#fff" />
                    <path d="M150,0h50v300h-50z" fill="#8D1B3D" />
                    <path d="M200,0h400v300H200z" fill="#8D1B3D" />
                    <path d="M150,0l100,150l-100,150z" fill="#8D1B3D" />
                    <path d="M150,0l50,75l-50,75z M200,150l50,75l-50,75z" fill="#fff" />
                  </svg>
                </span> Qatar</Link></div>
          </div>
        </div> */}

        {/* Reach out to us */}
        <div className="col-span-1 md:col-span-2 p-2 px-3 shadow rounded-5">
          <h3 className="text-lg font-semibold mb-4">Reach out to us</h3>
          <div className="mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <div className="space-y-2">
            <div><Link href="mailto:info@sowaan.com" className="text-gray-600 hover:text-gray-900 nav-link">info@sowaan.com</Link></div>
            <div className="text-light">+92 213 4303750</div>
            <div className="text-light">+92 321 2897837</div>
            <div className="text-light">+92 335 6661251</div>
            <div className="text-light">$01/802 Mehdi Tower, Shahrah-e Faisal, Kanechi City, Sindh, Pakistan</div>
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
        <p>© {new Date().getFullYear()} Sowaan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;