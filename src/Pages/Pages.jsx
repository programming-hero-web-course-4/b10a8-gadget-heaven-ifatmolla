import LaptopCard from './LaptopCard';
import items from '../Data/Data';
import Navbar from '../Components/Main/Navbar';
import { useState } from 'react';


const Pages = () => {
  const [activeCategory, setActiveCategory] = useState("Allproducts")
  const handleclick = (category) => {
  setActiveCategory(category)
  
  }
 
  return (
    <>
    <Navbar></Navbar>
    <div className="flex gap-4 max-w-7xl mx-auto">
      <div className='flex flex-col gap-5 w-[240px] p-6 bg-white rounded-xl  h-fit shrink-0'>
        <button style={{backgroundColor:activeCategory=="Allproducts"? "fuchsia" : "gray"}} className=' py-3 rounded-2xl  bg-gray-300' onClick={()=>handleclick("Allproducts")}>Allproducts</button>
        <button style={{backgroundColor:activeCategory=="Laptops"? "fuchsia" : "gray"}} className=' py-3 rounded-2xl  bg-gray-300' onClick={()=>handleclick("Laptops")}>Laptops </button>
        <button style={{backgroundColor:activeCategory=="Smartphones"? "fuchsia" : "gray"}} className=' py-3 rounded-2xl  bg-gray-300' onClick={()=>handleclick("Smartphones")}>Smartphones</button>
        <button style={{backgroundColor:activeCategory=="Accessories"? "fuchsia" : "gray"}} className=' py-3 rounded-2xl  bg-gray-300' onClick={()=>handleclick("Accessories")}>Accessories</button>
        
        
      </div>
    
      <div className="flex gap-7  flex-wrap  ">
        {items.filter((item2)=> activeCategory=="Allproducts"? true :  item2.category==activeCategory).map((item)=> <LaptopCard key={item.product_id} item={item}></LaptopCard> )}
          
   
      </div>

    </div>
    </>
  );
};

export default Pages;