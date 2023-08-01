import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/grocery-banner.png'
import Logout from '../Loq/Logout';

export default function Navbar({ user,logout }) {
  console.log(user);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fas fa-shopping-cart text-success"></i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to=''>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to='product'>product</Link>
              </li>
             {user?  <li className="nav-item">
                <Link className="nav-link " aria-current="page" to='cart'>Cart</Link>
              </li>:''}


            </ul>

            <ul className="navbar-nav ms-auto">
              {user ? <li className="nav-item">
                <Link className="nav-link " aria-current="page" onClick={logout} to='Out'>Logout</Link>
              </li>
                : <>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to='Reg'>Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to='Log'>Login</Link>
                  </li>

                </>}


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
