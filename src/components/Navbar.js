import React from 'react'

// Stateless Functional Component

const NavBar = ({ totalCounters, totalItems }) => {
    console.log('NavBar - Rendered')
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#sample'>
                Number of Active Counter(s): {" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalCounters}
                </span>
            </a>
            <a className='navbar-brand' href='#sample'>
                Total number of Items: {" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalItems}
                </span>
            </a>
        </nav>
    ); 
};
 
export default NavBar; 