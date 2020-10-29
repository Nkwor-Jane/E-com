import React from 'react'
import Products from '../Products/Products'

const Cards = () =>{
    const allItems = Products.map((items) =>
        <div className="max-w-sm mt-24 bg-blue-300 rounded overflow-hidden shadow-lg transition duration-500 ease-all  transform hover:-translate-y-1 hover:scale-110 " key={items.id}>
            <div>
                <img src={items.thumb} alt={items.alt}/>
            </div>

            <div>
                <h2>{items.product_name}</h2>
                <p>{items.description}</p>
                <p><span>{items.currency}</span> {items.price}</p>
                <div>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </div>
            </div>
        </div>    
    )
    return(
        <div className="w-full">
            <h3 className="text-lg w-full bg-gray-700 text-white px-4">Our Products</h3>
            <div className="lg:grid grid-cols-4 m-auto flex flex-col justify-evenly items-center gap-4 lg:py-4 lg:px-4">    
            {allItems}
            </div>
        </div>
    )
}
export default Cards;