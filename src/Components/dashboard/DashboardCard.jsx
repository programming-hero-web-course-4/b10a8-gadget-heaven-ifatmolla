import React from 'react';

const DashboardCard = ({product}) => {
    
    function handledelate() {
        const olditems = JSON.parse(localStorage.getItem('chartList') || "[]")
        const updateditems = olditems.filter(item => item.product_id !== product.product_id)
       localStorage.setItem('chartList', JSON.stringify(updateditems));
       location.reload()
    }
    return (
        <div className='flex w-11/12 mx-auto gap-32 bg-white justify-between px-5 pt-2 '>
            
           <div className="space-y-5  gap-4 mt-5">
           <div>
           <img src={product.product_image} alt="" />
           </div>
           <p className='text-2xl font-bold'>{product.product_title}</p>
            <p className='text-gray-500 font-medium'>{product.description}</p>
            <h1 className='text-xl font-bold'>price:{product.price}</h1>
           </div>
           <div>
           <button className='btn btn-error' onClick={handledelate}>Delete</button>
           </div>
        </div>
    );
};

export default DashboardCard;