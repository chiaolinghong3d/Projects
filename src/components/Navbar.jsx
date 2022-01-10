import React from 'react';
import NavbarItem from './NavbarItem';
import navbarItems from '../navbarItems';

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-sm flex-sm-column align-items-center py-2 text-center sticky-top'
      id='sideNav'
    >
      <div className="text-center pt-3">
      </div>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarResponsive'
        aria-controls='navbarResponsive'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav flex-column w-100 justify-content-center'>
          {navbarItems.map(({href, name}) => 
            <NavbarItem href={href} name={name}/>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
