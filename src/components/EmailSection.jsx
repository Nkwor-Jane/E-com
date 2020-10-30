import React from 'react'
import  gucci from '../images/gucci.jpg'
import chanel from '../images/chanel.png'

export const EmailSection = () => {
    return (
        <div className="flex items-center justify-evenly flex-col py-4 px-2 relative w-screen">
            <div className="p-4">
                <h3 className="text-3xl font-extrabold py-2 text-center ">Subcribe to Our newsletter</h3>
                <p className="text-sm text-gray-700 pb-2">Get exciting details about flash sales,price slashes, promotions and new products</p>
                <div className=" flex items-center justify-center pt-2 lg:px-4 px-6">
                <input type="text" className=" w-full py-3 px-2 sm:display-none leading-tight bg-gray-100 placeholder-gray-600 focus:outline-none" placeholder="Enter your email..."/>
                <button className=" hover:bg-gray-800 text-sm border-none py-3 px-2 bg-gray-600 text-white font-bold">SUBSCRIBE</button>
            </div>
            </div>

            <h1 className="text-3xl font-extrabold py-2 text-center">Our Partners</h1>
            <div  className="p-4 flex lg:flex-row flex-col  lg:py-4">
            <img src={gucci} alt="Gucci" className="w-24 pr-2 py-4"/>
            <img src={chanel} alt="Chanel" className="w-24 py-4"/>
            
            </div>

            
        </div>
    )
}


export default EmailSection