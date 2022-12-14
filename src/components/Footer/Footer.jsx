import React from 'react'
import { useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  const location = useLocation();

  return (
    <div className={`footer ${(location.pathname === '/contact') ? 'bottom_position' : ''}`}>
        <div className='footer_header'>
              This project is a frontend assignmnet for Hybr1d & The project repository can be found <span><a target='_blank' href='https://github.com/yagyesh-bobde/Hacker-News' >here</a>.</span> 
        </div>
        <div className="place-center">
              <a className='space place-center' href='https://www.linkedin.com/in/bobde-yagyesh/' rel="noreferrer" target={'_blank'}>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <p className='space'>LinkedIn</p>
              </a>


              <a className='space place-center' href='https://github.com/yagyesh-bobde' rel="noreferrer" target={'_blank'}>
                  <i className="fa-brands fa-github"></i>
                  <p className='space'>GitHub</p>
              </a>
              <a className='space place-center' href='https://twitter.com/bobde_yagyesh' rel="noreferrer" target={'_blank'}>
                  <i className="fa-brands fa-square-twitter"></i>
                  <p className='space'>Twitter</p>
              </a>
              
        </div>
      </div>
  )
}

export default Footer
