import React from 'react';
import Navbar from './Navbar';
import { menuData } from '../../Utils/data';

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
     <Navbar menuData={menuData} />
    </header>
  );
};

export default Header;
