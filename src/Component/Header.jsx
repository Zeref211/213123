import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from "react-router-dom";

function Header() {
  return (
    <div>
         <>
  
  <div>
<header className="header">
  <Link to="/" className="logo">Zeref</Link>
  <nav className="menu">
    <Link to="/Product">Product</Link>
    
    <a href="#">Aubot</a>
    <a href="#">Contact</a>
    <a href="#">Mail</a>
  </nav>
  <div className="right">
    <a href="" classname="icon">
    <FontAwesomeIcon icon={faCartShopping} />
    </a>
    <a href="" classname="icon">
    <FontAwesomeIcon icon={faCartShopping} />
    </a>
    <a href="" classname="icon">
    <FontAwesomeIcon icon={faCartShopping} />
    </a>
  </div>
</header>
</div>
</>

    </div>
  )
}

export default Header