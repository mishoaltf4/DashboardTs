import React from 'react'
import ProductsList, {products} from '../components/ProductsList'

function Products() {
    
    products.map(item => console.log(item.id));
  return (
    <>
        <div className="products w-full pl-6 pr-6 lg:pl-28 lg:pr-12 mt-6 font-nunitoSans">
            <h1 className='text-3xl font-bold tracking-wider dark:text-dark-text'>
                Products
            </h1>

            <div className="products-bar lg:h-80 mt-6 w-full h-full pt-6 pb-6 bg-[#4880FF] rounded-2xl bg-product-pattern flex items-center justify-center">
                <div className="product-bar__inner w-3/4 text-white">
                    <p>September 12-22</p>
                    <h1 className='text-4xl mt-2 mb-2 w-full sm:w-3/4 md:w-2/4 lg:w-full font-bold'>Enjoy free home delivery in this summer</h1>
                    <p>Designer Dresses - Pick from trendy Designer Dress.</p>
                    <button className='mt-7 sm:w-40 w-full h-11 bg-[#FF8743] rounded-lg font-bold'>Get Started</button>
                </div>
            </div>

            <div className="products-productList w-full mt-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-1 gap-14 pb-6">
                <ProductsList />
            </div>
        </div>
    </>
  )
}

export default Products