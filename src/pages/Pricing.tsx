import React from 'react'

function Pricing() {
  return (
    <>
      <div className="pricing w-full pl-6 pr-6 lg:pl-28 lg:pr-12 mt-6 font-nunitoSans">
        <h1 className='text-3xl font-bold'>Pricing</h1>
        <div className="pricing-boxes w-full grid grid-rows-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 mt-6 mb-6 ">

          <div className="pricing-box w-full h-full pt-10 pb-10 pl-20 pr-20 rounded-xl bg-light-component bg-opacity-80 dark:bg-dark-component bg-product-pattern relative">
            <div className="box-top w-full h-56 border-b-2 flex flex-col items-center justify-around pb-10">
              <p className='text-sm font-bold'>Basic</p>
              <p className='text-xs opacity-50'>Monthly charge</p>
              <h1 className='text-5xl text-active-btn font-bold'>$14.99</h1>
            </div>
            <div className="box-middle w-full flex flex-col items-center *:pb-9 mt-10 border-b-2">
              <p className='font-bold'>Free Setup</p>
              <p className='font-bold'>Bandwidth Limit 10 GB</p>
              <p className='font-bold'>20 User Connection</p>
              <p className='opacity-50'>Analytics Report</p>
              <p className='opacity-50'>Public API Access</p>
              <p className='opacity-50'>Plugins Intregation</p>
              <p className='opacity-50'>Custom Content Management</p>
            </div>
            <div className="box-bottom mt-10 flex flex-col items-center w-full">
              <button className=' font-bold w-44 h-16 bg-transparent border border-active-btn rounded-full text-active-btn hover:bg-active-btn hover:text-white transition-all'>Get Started</button>
              <a href="#" className='underline mt-6 font-bold'>Start Your 30 Day Free Trial</a>
            </div>
          </div>


          <div className="pricing-box w-full h-full pt-10 pb-10 pl-20 pr-20 rounded-xl bg-light-component bg-opacity-80 dark:bg-dark-component bg-product-pattern relative">
            <div className="box-top w-full h-56 border-b-2 flex flex-col items-center justify-around pb-10">
              <p className='text-sm font-bold'>Standard</p>
              <p className='text-xs opacity-50'>Monthly charge</p>
              <h1 className='text-5xl text-active-btn font-bold'>$49.99</h1>
            </div>
            <div className="box-middle w-full flex flex-col items-center *:pb-9 mt-10 border-b-2">
              <p className='font-bold'>Free Setup</p>
              <p className='font-bold'>Bandwidth Limit 10 GB</p>
              <p className='font-bold'>20 User Connection</p>
              <p className='font-bold'>Analytics Report</p>
              <p className='font-bold'>Public API Access</p>
              <p className='opacity-50'>Plugins Intregation</p>
              <p className='opacity-50'>Custom Content Management</p>
            </div>
            <div className="box-bottom mt-10 flex flex-col items-center w-full">
              <button className='w-44 font-bold h-16 bg-transparent border border-active-btn rounded-full text-active-btn hover:bg-active-btn hover:text-white transition-all'>Get Started</button>
              <a href="#" className='underline mt-6 font-bold'>Start Your 30 Day Free Trial</a>
            </div>
          </div>



          <div className="pricing-box w-full h-full pt-10 pb-10 pl-20 pr-20 rounded-xl bg-light-component bg-opacity-80 dark:bg-dark-component bg-product-pattern relative">
            <div className="box-top w-full h-56 border-b-2 flex flex-col items-center justify-around pb-10">
              <p className='text-sm font-bold'>Premium</p>
              <p className='text-xs opacity-50'>Monthly charge</p>
              <h1 className='text-5xl text-active-btn font-bold'>$89.99</h1>
            </div>
            <div className="box-middle w-full flex flex-col items-center *:pb-9 mt-10 border-b-2">
              <p className='font-bold'>Free Setup</p>
              <p className='font-bold'>Bandwidth Limit 10 GB</p>
              <p className='font-bold'>20 User Connection</p>
              <p className='font-bold'>Analytics Report</p>
              <p className='font-bold'>Public API Access</p>
              <p className='font-bold'>Plugins Intregation</p>
              <p className='font-bold'>Custom Content Management</p>
            </div>
            <div className="box-bottom mt-10 flex flex-col items-center w-full">
              <button className='w-44 font-bold h-16 bg-transparent border border-active-btn rounded-full text-active-btn hover:bg-active-btn hover:text-white transition-all'>Get Started</button>
              <a href="#" className='underline mt-6 font-bold'>Start Your 30 Day Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing