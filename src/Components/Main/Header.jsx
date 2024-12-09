import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-20 w-full flex justify-between mx-auto'>
            <h1 className='text-2xl font-bold  '>Gadget Heaven</h1>
          <div className="flex justify-center gap-14">
          <button className=''> <Link to="/">Home</Link></button>
           <button className=''> <Link to="/stutics">Statistics</Link></button>
            <button className='text-purple-700'><Link to="/Dashboard">Dashboard</Link></button>
          </div>
          

        
 <div className="gap-7 flex items-center">
 <img className='p-2'  src="/src/Components/Main/Group 1.png" alt="" />
 <Link to="/wishlist"> <img  className='bg-white p-2 rounded-full border border-emerald-600 ' src="/src/Components/Main/Frame (1).png" alt="" /></Link>

 </div>
 
  </div>
        
    );
};

export default Header;