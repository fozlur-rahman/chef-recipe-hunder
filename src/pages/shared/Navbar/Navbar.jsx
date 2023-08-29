import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container">
                <div>
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-25 ms-auto d-flex " id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto fw-bold">
                        <Link className='text-secondary text-decoration-none me-4' to='/'>Home</Link>
                        <Link className='text-secondary text-decoration-none' to='/blog'>Blog</Link>
                    </ul>
                </div>
                <div className='d-flex align-items-center ms-auto'>
                    <img src="" alt="user img" />
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;