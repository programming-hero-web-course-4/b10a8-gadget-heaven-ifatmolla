
import DashboardCard from './DashboardCard';
import Header from '../Main/Header';
import DashboardBanner from '../DashboardBanner';
import { useState } from 'react';

const Dashboard = () => {
    const [sort, setSort] = useState(false)
 
    const handlePurchase = ()=>{
    localStorage.removeItem('chartList')
    document.getElementById('my_modal_5').showModal()
    }
   const itemsJSON = localStorage.getItem('chartList') 
   const items = JSON.parse(itemsJSON || "[]")
   const handlesort = ()=> {
    setSort(true)
   }
   const sortitems = sort ? items.sort((a, b) => b.price - a.price) : items
   
    return (
     <>
      <Header></Header>
      <DashboardBanner></DashboardBanner>
        <div className='pt-5 pb-5'> 
           <div className="flex justify-end gap-8">
           <h1 className='text-xl font-bold '>Total cost: 999.99</h1>
           <button  onClick={handlesort} className=' border border-blue-400 px-12 py-4 rounded-full'>Sort by price</button> 
         <button className='bg-purple-800 px-12 py-3 rounded-full' onClick={handlePurchase}>Purchase</button>
        
           </div>
        
          {
            sortitems.map((product)=> <DashboardCard key={product.product_id} product={product}> </DashboardCard>)
          }


          {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <h1 className='text-3xl font-bold text-center'>Payment Successfully</h1>
   <p className='text-center'>Thanks for purchasing. <br />
   <span className='text-center'>Total:2449.96</span></p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>location.reload()} className="pr-72 btn btn-success text-center text-xl">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
     </>
    );
};

export default Dashboard;