import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 bg-teal-100 shadow-md z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-teal-800">Arnab Mandal</div>
                <ul className="flex space-x-8">
                    <li><a href="#gallery" className="text-teal-600 hover:text-teal-900">Gallery</a></li>
                    <li><a href="#contact" className="text-teal-600 hover:text-teal-900">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
