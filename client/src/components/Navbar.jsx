import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4  lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between my-5 items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Touraura
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
