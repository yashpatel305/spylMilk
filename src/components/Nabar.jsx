import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { IoMdClose } from 'react-icons/io';
import { HiEquals } from "react-icons/hi2";


const Navbar = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const defaultImage = '/images/default.webp';

    const imageMap = {
        'SHOP': '/images/shop.png',
        'FIND IN STORES': '/images/fit.png',
        'ABOUT US':'/images/about.webp',
        'TASTY TALKS': 'images/tt.png',
        'PROGRAMS': 'images/contact.png',
        'CONTACTS': 'images/pro.png',
    };

    // Animate menu open/close
    useEffect(() => {
        if (menuRef.current) {
            if (isOpen) {
                gsap.to(menuRef.current, {
                    y: '0%',
                    duration: 0.8,
                    ease: 'power2.out',
                    pointerEvents: 'auto',
                });
            } else {
                gsap.to(menuRef.current, {
                    y: '-100%',
                    duration: 0.8,
                    ease: 'power2.in',
                    pointerEvents: 'none',
                });
            }
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* Navbar */}
            <nav className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 py-4'>
                <img src='/images/nav-logo.svg' alt='nav-logo' className='w-20 md:w-24' />

                {/* Toggle Button */}
                <div
                    className='w-14 h-14 rounded-full bg-[#fef3f0] flex items-center justify-center cursor-pointer text-dark-brown text-2xl hover:bg-[#e3a458] transition-colors duration-700'
                    onClick={toggleMenu}
                >
                    {isOpen ? <IoMdClose /> : <HiEquals />}
                </div>

                <button
                    className='cursor-pointer bg-[#fef3f0] text-dark-brown font-bold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-[#e3a458] transition-colors duration-700'
                >
                    FIND IN STORES
                </button>
            </nav>


            {/* Fullscreen Menu Overlay - always rendered, hidden with transform when closed */}
            <div
                ref={menuRef}
                className='fixed top-0 left-0 w-full h-full bg-milk z-40 overflow-hidden flex'
                style={{
                    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
                    transition: 'none', // GSAP handles transition
                    pointerEvents: isOpen ? 'auto' : 'none',
                }}
            >
                {/* Left Menu */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center px-6'>
                    <ul className='text-dark-brown text-4xl md:text-6xl font-sans space-y-4 text-center md:text-left font-black flex flex-col justify-center items-center'>
                        {Object.keys(imageMap).map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className='cursor-pointer transition-opacity duration-200 hover:opacity-70'
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Socials */}
                    <div className='mt-10 flex gap-8 text-dark-brown text-sm font-paragraph cursor-pointer'>
                        <span>YouTube</span>
                        <span>Instagram</span>
                        <span>TikTok</span>
                    </div>
                </div>

                {/* Right Image Section */}
                <div
                    className='hidden md:block w-1/2 h-full transition-all duration-300'
                    style={{
                        backgroundImage: `url(${hoveredItem ? imageMap[hoveredItem] : defaultImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
            </div>
        </>
    );
};

export default Navbar;
