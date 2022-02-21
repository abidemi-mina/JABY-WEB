// import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Link } from "react-router-dom"
export const Navigation = (props) => {
  // const [isShown, setIsShown] = useState(false);
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/#home'>
          JABY 
          </a>{' '}
        </div>
        
     
     

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <Link as={Link} to='/' className='page-scroll'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='page-scroll'>
                About
              </Link>
            </li>
            <li as={ButtonGroup} >
              <Link to='/port' className='page-scroll'>
                Courses
              </Link>
              
            </li>
           
            <li>
        
              {/* <Link to='/testimonials' className='page-scroll'>
                Testimonials
              </Link> */}
            </li>
            
            <li>
              <Link to='/contact' className='page-scroll'>
                Contact
              </Link>
            </li>
            <li>
              <Link as={Link} to='/register' className='page-scroll'>
                Register
              </Link>
            </li>
            <li>
            <Link as={Link} to='/login' className='page-scroll'>
                Login
              </Link>
            </li>
            <li className="dropdown">
               <Link to='#'>me</Link>
               <ul className="dropdown-content">
                    <li><Link to="./shop-details">Shop Details</Link></li>
                    <li><Link to="./shoping-cart">Shoping Cart</Link></li>
                    <li><Link to="./checkout">Check Out</Link></li>
                    <li><Link to="./blog-details">Blog Details</Link></li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
