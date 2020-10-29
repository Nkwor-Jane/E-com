import React from 'react'

export const Header = () => {
    return (
        <div className="overflow-hidden">
            <header  className=" lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0  fixed shadow w-full">    
                <div className="flex-1 flex justify-between items-center">
                    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6 mt-1">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>  
                    </label>   
                    <a href="#" className="italic font-extrabold text-xl">e-com</a> 
                    <div className="flex items-center w-50">
                    <input type="text" className="lg:block hidden py-2 px-2 sm:display-none text-gray-700 leading-tight border-2 border-gray-200 placeholder-gray-600 focus:outline-none rounded " placeholder="Search..."/>
                    <button className="lg:bg-blue-300 hover:bg-blue-600 text-sm border-none py-1 px-1 rounded bg-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="search w-8 h-8 py-2 px-2 "><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-gray-800 pt-4 lg:pt-0">
                                <li>
                                    <a href="#" className="lg:p-4 py-3 px-0 block border-2 border-transparent hover:bg-gray-200">Menu</a>
                                </li>
                                <li>
                                    <a href="#" className="lg:p-4 py-3 px-0 block border-2 border-transparent hover:bg-gray-200">Offers</a>
                                </li>
                                <li>
                                    <a href="#" className="lg:p-4 py-3 px-0 block border-2 border-transparent hover:bg-gray-200">My Cart</a>
                                </li>
                                <li>
                                    <a href="#" className="lg:p-4 py-3 px-0 block border-2 border-transparent hover:bg-gray-200">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="user-circle w-6 h-6 inline-block"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                        
                </div>
            </header>
        </div>
    )
}

export default Header;