
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full '>
           
           <Outlet></Outlet>
           <div className="">
           <Footer></Footer>
           
           </div>
        </div>
    );
};

export default Main;