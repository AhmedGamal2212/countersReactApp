import React from 'react';

function NavBar ({totalCounters}) {
    return ( 
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <span className="badge rounded-pill bg-dark">{totalCounters}</span>
                </div>
            </nav>
        </>
     );
}

export default NavBar;