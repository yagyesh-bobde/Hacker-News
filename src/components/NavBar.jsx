import React, { useState } from 'react'
import {
    Link
} from 'react-router-dom'



const NavBar = () => {
 const [ mode, setMode ] = useState('dark');

//  const onClick = () =>{
//     if (mode === 'light'){
//         setMode('dark')
//     }
//     else{
//         setMode('light')
//     }
//  }

  return (
      <nav className={`navbar navbar-expand-md navbar-${(mode === 'dark')? 'primary': mode} bg-${mode}`} style={{ position: 'fixed', zIndex: '7', width: '100%', top:'0'}}>
          <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={{ fontSize: '2rem' }}>HackerNews</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" style={{ color: 'white'}} id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                      <li className="nav-item">
                          <Link style={{ color: 'grey'}} className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/contact" style={{ color: 'grey' }}>Contact Us</Link>
                      </li>
                     
                  </ul>
                  {/* TODO : NIGHT MODE */}
                  
                  {/* <div className="place-center">
                   <span style={{ fontWeight: '100', fontFamily: 'sans-serif', color: `${(mode==='light') ? 'black': 'white'}`}}>Switch Mode</span>
                      <div className="shiftmode mx-2 form-check form-switch">
                          <input onClick={onClick} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked/>
                    </div>
                      
                  </div> */}
                 
              </div>
          </div>
      </nav>
  )
}

export default NavBar
