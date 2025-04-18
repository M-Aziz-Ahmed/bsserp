'use client'
import Link from "next/link"
import { useState } from "react";
import Image from "next/image"
import { FaWhatsapp, FaChevronDown, FaChevronUp, FaToggleOn } from 'react-icons/fa'
import path from "path";

const Navbar = () => {
    const links = [
        { name: 'Home', path: '/', subLinks: [] },
        {
            name: 'Solutions',
            path: '',
            subLinks: [
                { name: "Manufacturing ERP", path: '/solutions/manufacturing-erp' },
                { name: "Distribution ERP Software", path: '/solutions/distribution-erp' }
            ]
        },
        { name: 'Modules', path: '/modules', subLinks: [
            { name: "Accounts", path: '' },
            { name: "HRMS", path: '' },
            { name: "Supply Chain Module",path:''},
            { name: "Sales & Merchandizing",path:''}
        ] },
        { name: 'Services', path: '/services', subLinks: [] },
        {
            name: 'Resources', path: '/resources', subLinks: [
                { name: "Blogs", path: '/resources/blogs' },
                { name: "Case Studies", path: '/resources/case-studies' },
                { name: "Client Stories", path: '/resources/client-stories' },
                { name: "Integration", path: '/resources/integration' },
            ]
        },
        { name: 'About Us', path: '/about', subLinks: [] },
        { name: 'Contact Us', path: '/contact', subLinks: [] },
    ]

    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky-top bg-light shadow-sm">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between py-0">
                    {/* Logo */}
                    <Link href="/" className="navbar-brand">
                        <Image
                            src="/logo.png"
                            height={150}
                            width={150}
                            alt="Company Logo"
                            className="img-fluid"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="d-none d-lg-block">
                        <div className="me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            {links.map((link, index) => (
                                <div
                                    key={index}
                                    className="nav-item position-relative mx-2"
                                    onMouseEnter={() => link.subLinks.length > 0 && setActiveSubmenu(index)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    <div className="d-flex align-items-center">
                                        <Link
                                            className="nav-link text-dark fw-medium px-3 py-2"
                                            href={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subLinks.length > 0 ? (
                                            <span className="ms-1 text-dark">
                                                {activeSubmenu === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </span>
                                        
                                        ):""}
                                    </div>

                                    {link.subLinks.length > 0 && activeSubmenu === index && (
                                        <div className="position-absolute bg-white p-3 rounded shadow-lg mt-0"
                                            style={{ minWidth: '220px', zIndex: 1000 }}>
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    className="dropdown-item d-block px-3 py-2 text-dark hover-bg-secondary hover-text-white rounded"
                                                    href={subLink.path}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="d-lg-none border-0 d-flex align-items-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="navbar-toggler-icon text-secondary"><FaToggleOn size={40} /></span>
                    </button>

                    {/* CTA Buttons */}
                    <div className="d-none d-lg-flex align-items-center gap-3">
                        <a href="https://wa.me/yournumber" className="text-success">
                            <FaWhatsapp size={40} />
                        </a>
                        <Link href="/demo" className="btn btn-secondary px-4 py-2 rounded-pill fw-medium">
                            Try Out
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="d-lg-none bg-white p-3 rounded shadow-lg mt-2">
                        <ul className="navbar-nav">
                            {links.map((link, index) => (
                                <li key={index} className="nav-item mb-2">
                                    <div
                                        className="d-flex justify-content-between align-items-center"
                                        onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                                    >
                                        <Link
                                            className="nav-link text-dark fw-medium"
                                            href={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subLinks.length > 0 && (
                                            <span>
                                                {activeSubmenu === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </span>
                                        )}
                                    </div>

                                    {link.subLinks.length > 0 && activeSubmenu === index && (
                                        <div className="ps-3 mt-2">
                                            {link.subLinks.map((subLink, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    className="dropdown-item d-block py-2 text-dark"
                                                    href={subLink.path}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                            <li className="nav-item mt-3">
                                <a href="https://wa.me/yournumber" className="d-flex align-items-center gap-2 text-dark">
                                    <FaWhatsapp size={20} className="text-success" />
                                    WhatsApp
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <Link href="/demo" className="btn btn-secondary w-100 rounded-pill">
                                    Try Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar