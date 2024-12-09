import React from 'react';
import { Link } from 'react-router-dom';

const DashboardBanner = () => {
    return (
        <div className='bg-purple-700 w-full h-60 '>
           <div className="">
            <h1 className='text-3xl font-bold text-center p-7'>Dashboard</h1>
            <p className='text-center text-white p3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
          </div>
          <div className="flex justify-center gap-8 p-5">
         <Link to="/Dashboard"><button className='bg-white px-16 py-3 rounded-full'>Cart</button></Link>
         <Link to="/wishlist"><button className='bg-white px-16 py-3 rounded-full'>WishList</button></Link>
         </div>
        </div>
    );
};

export default DashboardBanner;