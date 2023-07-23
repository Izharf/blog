import React from 'react'
import './Topbar.css'


const Topbar = () => {
  return (
    <>
       <div className="topbar__right"><i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-pinterest"></i> <i className="fa-brands fa-instagram"></i> </div>


    <div className="topbar__center">
     <ul className="topbar__list">
     <li className="topbar__items">Home</li>
     <li className="topbar__items">About us</li>
     <li className="topbar__items">Contact us</li>
     <li className="topbar__items">Log out</li>

     </ul>

    </div>
 
    <div className="topbar__left">
    <img className="topbar__image" src="https://images.unsplash.com/profile-1496175100457-27a8e68786eb?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="something wrong" />

    <i className="topbar__search fa-solid fa-magnifying-glass"></i>
    </div>
    </>
  )
}

export default Topbar