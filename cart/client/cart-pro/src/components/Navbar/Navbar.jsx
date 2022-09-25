import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link class="navbar-brand" to='/'>Product</Link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/products'>Products</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/create'>Create Product</Link>
                    </li>
                </ul>
            </div>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to='/admin'>Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
// 