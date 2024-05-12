interface Product {
    id: string,
    title: string,
    price: number,
    img: string
}

export const products : Product[] = [
    {
        id: "1",
        title: "Hello 1",
        price: 120,
        img: "Ragaca ragaca"
    },
    {
        id: "2",
        title: "Hello 2",
        price: 120,
        img: "Ragaca ragaca"
    },
    {
        id: "3",
        title: "Hello 3",
        price: 120,
        img: "Ragaca ragaca"
    },
    {
        id: "4",
        title: "Hello 3",
        price: 120,
        img: "Ragaca ragaca"
    },
]

import React from 'react'

function ProductsList() {
  return (
    <>
        {products.map(item => (
            <div className="box w-full h-full pb-6 rounded-2xl overflow-hidden font-nunitoSans bg-light-component dark:bg-dark-component" key={item.id}>
                <div className="box-img w-full h-80 bg-red-300"></div>

                <div className="box-content pl-6 pr-6 mt-6 flex justify-between">
                    <div className="box-content__left">
                        <h3 className='text-xl dark:text-dark-text'>{item.title}</h3>
                        <p className='text-lg text-[#4880FF] mt-2 mb-2 font-bold'>$ {item.price}</p>
                        <p className='text-[#FF9500]'>rating</p>
                    </div>
                    <div className="box-content__right w-11 h-11 rounded-full bg-[#F9F9F9] dark:bg-[#4B5668]"></div>
                </div>

                <button className='mt-6 ml-6 w-32 h-10 bg-[#E2EAF8] dark:bg-[#4B5668] dark:text-dark-text text-light-text text-sm font-bold rounded-lg'>Edit Product</button>
            </div>
        ))}
    </>
  )
}

export default ProductsList