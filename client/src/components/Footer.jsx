import React from 'react';

function Footer() {
    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto max-w-screen-xl text-center">
                <a href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    Touraura
                </a>
                <p class="my-6 text-gray-500 dark:text-gray-400">Explore the world with us.</p>
                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="/" class="mr-4 hover:underline md:mr-6">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
