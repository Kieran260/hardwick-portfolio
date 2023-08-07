import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from '../style';

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
        <Link
            to={to}
            className={`p-2 ${isActive ? 'text-white' : 'text-white/50'} mx-2 transition-colors hover:text-white`}
        >
            {children}
        </Link>
    );
}

const Navbar = () => {
    return (
        <nav className={`w-full flex py-5 justify-between items-center bg-transparent text-white border-b border-white/20 ${styles.paddingX}`}>
            <div className="pl-2">
                <CustomLink to="/">Logo</CustomLink>
            </div>
            <div className="px-2 cursor-pointer md:hidden">
                {/* Mobile menu button */}
            </div>
            <div className="md:block hidden text-sm">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/work">Work</CustomLink>
                <CustomLink to="/about">About</CustomLink>
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
