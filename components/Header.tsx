import React from 'react';
import { ChevronDownIcon, GridIcon } from './icons';

const NavLink = ({ children, hasDropdown = false }: { children: React.ReactNode, hasDropdown?: boolean }) => (
    <a href="#" className="flex items-center gap-1 text-brand_text_dark hover:text-brand_red font-medium transition-colors">
        {children}
        {hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
    </a>
);

export const Header = (): React.ReactNode => {
    return (
        <header className="w-full bg-white py-4 shadow-sm">
            <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-brand_text_dark">BANK CSP HELP</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <NavLink>MERGE PDF</NavLink>
                        <NavLink>SPLIT PDF</NavLink>
                        <NavLink>COMPRESS PDF</NavLink>
                        <NavLink hasDropdown>CONVERT PDF</NavLink>
                        <NavLink hasDropdown>ALL PDF TOOLS</NavLink>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                     <button className="text-brand_text_dark hover:text-brand_red transition-colors">
                        <GridIcon className="w-6 h-6"/>
                     </button>
                </div>
            </div>
        </header>
    );
};