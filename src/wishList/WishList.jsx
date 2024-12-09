import DashboardWishList from './DashboardWhisList';

import DashboardBanner from '../Components/DashboardBanner';
import Header from '../Components/Main/Header';

const WishList = () => {


   const itemsJSON = localStorage.getItem('WhishList') 
   const items = JSON.parse(itemsJSON || "[]")
    return (
     <>
      <Header></Header>
      <DashboardBanner></DashboardBanner>
        <div> 
        
          {
            items.map((product)=> <DashboardWishList key={product.product_id} product={product}> </DashboardWishList>)
          }



         
        </div>
     </>
    );
};

export default WishList;