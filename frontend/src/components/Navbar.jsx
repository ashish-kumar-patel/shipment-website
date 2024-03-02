
import React, { useEffect, useState } from 'react';
const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const links = ['Home', 'Track Package', 'About us', 'Service', 'Resources'];

    return (
        <nav className={`bg-[#f1f1f1] w-full h-24 items-center fixed top-0  md:top-[22px] z-50 opacity-100 transition-transform duration-300 ${visible ? '' : '-translate-y-full'}`}>
            <div className='container mx-auto px-10 md:px-4  py-6'>
                <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold'>
                        <h3>BomBino</h3>
                    </span>

                    <div onClick={() => setOpen(!open)} className='text-3xl md:hidden absolute right-12 top-6 cursor-pointer '>
                    <ion-icon name={open?'close':'menu'}></ion-icon>
                    </div>

                    <div className={`md:items-center md:pb-0 flex flex-col md:flex-row pb-12 absolute md:static left-0 text-center w-full md:w-auto md:pl-0 transition-all duration-600 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {links.map((linkText, index) => (
                            <a href="#" key={index} className='text-gray-800 hover:text-black duration-500 px-9 py-6 md:py-0 bg-[#f1f1f1] h-auto'>{linkText}</a>
                        ))}
                        <button className='text-md bg-black text-white px-5 py-2'>Contact Us</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

