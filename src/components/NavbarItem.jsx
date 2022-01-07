import React from 'react';

function NavbarItem({ href, name }) {
  return (
    <li className='nav-item'>
      <a className='nav-link js-scroll-trigger' href={`#${href}`}>
        <h3>{name}</h3>
      </a> 
    </li>
  );
}

export default NavbarItem;
