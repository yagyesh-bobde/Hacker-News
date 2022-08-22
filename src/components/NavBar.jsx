import React, { useState } from 'react'
import {
    Link
} from 'react-router-dom'



const NavBar = () => {
 const [ mode, setMode ] = useState('light');

 const onClick = () =>{
    if (mode === 'light'){
        setMode('dark')
    }
    else{
        setMode('light')
    }
 }

  return (
      <nav className={`navbar navbar-expand-md navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">HackerNews</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/contact">Contact Us</Link>
                      </li>
                     
                  </ul>
                  <div className="place-center">
                   <span style={{ fontWeight: '100', fontFamily: 'sans-serif', color: `${(mode==='light') ? 'black': 'white'}`}}>Switch Mode</span>
                      <div className="shiftmode mx-2 form-check form-switch">
                          <input onClick={onClick} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked/>
                    </div>
                      <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                  </div>
                 
              </div>
          </div>
      </nav>
  )
}

export default NavBar
