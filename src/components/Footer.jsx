import React from 'react'


export const Footer = () => {
    return (
        <footer className="p-4 bg-gray-900 w-full flex flex-col items-center justify-between absolute">
            <div className="lg:grid grid-cols-4 flex flex-col gap-4 lg:py-4 ">
                <div className="py-4 text-gray-200 px-2">
                    <p className="text-lg cursor-pointer" >e-com</p>
                    <p className="text-gray-600">Quality Assured</p>
                </div>
                <div className="py-4 text-gray-200 px-2">
                    <h3 className="text-lg" >Explore</h3>
                    <ul className="text-gray-600 text-sm">
                        <li className="cursor-pointer hover:text-bg-200">Home</li>
                        <li className="cursor-pointer hover:text-bg-200">Featured</li>
                        <li className="cursor-pointer hover:text-bg-200">MyCart</li>
                        <li className="cursor-pointer hover:text-bg-200">My Account</li>
                    </ul>
                </div>
                <div className="py-4 text-gray-200 px-2">
                    <h3>Our Services</h3>
                    <ul className="text-gray-600 hover:text-bg-400 text-sm">
                        <li className="cursor-pointer hover:text-bg-200">Pricing</li>
                        <li className="cursor-pointer hover:text-bg-200">Free Shipping</li>
                        <li className="cursor-pointer hover:text-bg-200">Gift Cards</li>
                    </ul>
                </div>
                <div className="py-4 text-gray-200 px-2 ">
                    <h3 className="text-lg">Follow us</h3>
                    <ul className=" flex flex-row py-2">
                        <li className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
                        </li>
                        <li className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
                        </li>
                        <li className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="bg-gray-400 w-full"/>
            <div className="py-4 px-2 align-middle text-sm text-gray-200">&copy; 2020 Copyright Reserved</div>
        </footer>
    )
}


export default Footer