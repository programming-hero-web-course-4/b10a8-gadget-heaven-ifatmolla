import { Link, } from 'react-router-dom';

const LaptopCard = ({item}) => {
  console.log(item)
  
    return (
        
           <div className='w-[322px]'>
          <div className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img className='w-[282px] h-[181px] object-cover'
                src={item.product_image} />
             </figure>
            <div className="card-body">
              <h2 className="card-title">{item.product_title}</h2>
              <p className='mr-40'>Price: {item.price}</p>
              <div className="card-actions mr-">
               
                <Link to={`/product/${item.product_id}`}> <button  className='rounded-md bg-slate-500 text-white p-4'>View Details</button></Link>
              </div>
            </div>

          </div>
        </div>  
      
    );
};

export default LaptopCard;