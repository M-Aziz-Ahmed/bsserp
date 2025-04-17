'use client'
import Link from "next/link"
import { useState } from "react";
import Image from "next/image"
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    const links = [
        { name: 'Home', path: '/', subLinks: [] },
        {
            name: 'Solutions',
            path: '/solutions',
            subLinks: [
                { name: "manufacturing ERP", path: '/' },
                { name: "distribution ERP Software", path: '/' }
            ]
        },
        { name: 'Module', path: '/module', subLinks: [] },
        { name: 'Services', path: '/services', subLinks: [] },
        {
            name: 'Resources', path: '/resources', subLinks: [
                { name: "Blogs", path: '/' },
                { name: "Case Studies", path: '/' },
                { name: "Client Stories", path: '/' },
                { name: "Integration", path: '/' },
            ]
        },
        { name: 'About', path: '/about', subLinks: [] },
        { name: 'Contact', path: '/contact', subLinks: [] },
    ]

    const [activeSubmenu, setActiveSubmenu] = useState();

    return (
        <div className="d-flex bg-light align-items-center" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div className="container d-flex align-items-center justify-content-between gap-5">
                <Image src="/logo.png" height={30} width={100} alt="Loading..." />
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="nav-item position-relative"
                                onMouseEnter={() => link.subLinks.length > 0 && setActiveSubmenu(index)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <Link
                                    className="nav-link"
                                    href={link.path}
                                >
                                    {link.name}
                                </Link>
                                {link.subLinks.length > 0 && activeSubmenu === index && (
                                    <div className="position-absolute bg-white p-2 rounded shadow" style={{ minWidth: '200px', zIndex: 1000 }}>
                                        {link.subLinks.map((subLink, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                className="dropdown-item d-block p-2"
                                                href={subLink.path}
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="d-flex gap-4">
                    <FaWhatsapp size={35} className="text-success" />
                    <div className="btn btn-secondary">Try Out</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar