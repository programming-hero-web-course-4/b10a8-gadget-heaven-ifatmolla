import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  const cartlistJson = localStorage.getItem('chartList') 
  const cart = JSON.parse(cartlistJson || "[]")
  const cartCount = cart.length
  console.log(cartCount)

  const Whishlist = localStorage.getItem('WhishList' ) 
  const wish = JSON.parse(Whishlist || "[]") 
  const whislistcount = wish.length
    return (
        <div className=''>
            <div className="relative  navbar bg-base-100 bg-violet-800 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/stutics"><a>Statistics</a></Link></li>
   <li><Link to="/Dashboard"><a>Dashboard</a></Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
  
   <div className=" flex relative mr-3">
   <img  src="/src/Components/Main/Group 1.png" alt="" />
   <p className='absolute -top-2 left-8 text-2xl  '>{cartCount} </p>
   </div>

  <div className=" flex relative">
  <Link to="/wishlist"> <img  className='bg-white p-2 rounded-full border border-emerald-600 ' src="/src/Components/Main/Frame (1).png" alt="" /></Link>
  <p className='absolute -top-2 left-8 text-2xl  '>{whislistcount}</p>
  </div>
  </div>
</div>

<div className='bg-violet-800 h-[550px] relative mb-[400px] '>
   <h1 className='text-white text-center text-6xl font-bold pt-10'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
   <p className='text-white text-center mt-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
  <div className='text-center'>
  <button className='text-black bg-white py-3 px-6 rounded-full mt-7'>Shop Now</button>
  </div>

{/* /////// */}
<div className="absolute w-full flex justify-center pt-10">
  <img className=' ' src="/src/Components/Rectangle 1 (2).png" alt="" />
</div>
</div>
<h1 className='text-center text-5xl font-bold mb-40 text-black'>Explore Cutting-Edge Gadgets</h1>
  </div>
        
      
    );
};

export default Navbar;