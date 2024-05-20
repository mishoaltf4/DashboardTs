import React from 'react'
import FavoritesList from '../components/FavoritesList'

function Favorites(){
  return (
    <>
        <div className="favorites font-nunitoSans mt-6 pl-6 pr-6 lg:pl-28 lg:pr-12">
            <h1 className='text-3xl text-light-text font-bold dark:text-dark-text'>Favorites</h1>

            <div className="favorites-boxes w-full mt-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-1 gap-14 pb-6">
                <FavoritesList />
            </div>

        </div>
    </>
  )
}

export default Favorites