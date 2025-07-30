import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
 return(
  <div>
   <nav className='text-xl font-bold'>
    <Link href='/'> 
     <span className="cursor-pointer hover:text-blue-300 transition-colors duration-200"> Landing </span> 
    </Link>
    <Link href='/home'> 
     <span className="cursor-pointer hover:text-blue-300 transition-colors duration-200"> Home </span> 
    </Link>
    <Link href='/about'> 
     <span className="cursor-pointer hover:text-blue-300 transition-colors duration-200"> About </span> 
    </Link>
   </nav>
   {/* <p>Button page</p> */}
  </div>
 );
};

export default Header;