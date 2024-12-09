import React from 'react';

const DashboardWishList = ({ product }) => {
    function handledelate() {
        const olditems = JSON.parse(localStorage.getItem('WhishList') || "[]")
        const updateditems = olditems.filter(item => item.product_id !== product.product_id)
        localStorage.setItem('WhishList', JSON.stringify(updateditems));
        location.reload()
    }

    const AddToChart = () => {

        const olditems = JSON.parse(localStorage.getItem('chartList') || "[]")
        olditems.push(product)
        localStorage.setItem('chartList', JSON.stringify(olditems));
        handledelate()
        location.reload()

    }
    return (
        <div className='bg-slate-300 flex gap-20 w-9/12 mx-auto mt-5'>
            <div>
                <img src={product.product_image} alt="" />
            </div>
            <div className="">
                <h1 className='text-2xl font-bold'>{product.description}</h1>
                <p className='text-2xl font-bold'>{product.product_title}</p>
                <button onClick={AddToChart}>Add to card</button>
            </div>
            <div className="">
                <button className='btn btn-error' onClick={handledelate}>Delete</button>
            </div>
        </div>
    );
};

export default DashboardWishList;
// A8_challenging_myself