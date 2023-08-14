import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from '../style';
import { khLogoWhite } from '../assets';

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
    const { pathname } = useLocation();
    const isActive = 
        (to === '/' && pathname === to) || 
        (to !== '/' && pathname.startsWith(to));

    return (
        <Link
            to={to}
            className={`p-2 ${isActive ? 'text-white' : 'text-white/50'} rounded-full px-4 transition-colors hover:text-white text-[14px] font-sans `}
        >
            {children}
        </Link>
    );
}



const Navbar = () => {
    return (
        <nav className={`w-full flex py-5 justify-between items-center bg-background text-white ${styles.paddingX} ${styles.boxWidth}`}>
           
            <Link to="/">
                <img src={khLogoWhite} className="h-6 hover:cursor-pointer" alt="Logo" />
            </Link>
            
            <div className="px-2 cursor-pointer sm:hidden">
                {/* Mobile menu button */}
            </div>
            <div className="sm:block hidden text-sm">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </div>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/kieran260" target="_blank" rel="noreferrer" className="hover:shadow-xl transition-colors">
                    <BsGithub className="h-6 w-6 mx-1 text-white/75 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/kieran-hardwick-986b56195/" target="_blank" rel="noreferrer" className="hover:shadow-xl transition-colors">
                    <BsLinkedin className="h-6 w-6 mx-1 text-white/75 hover:text-white" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
