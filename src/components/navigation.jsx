// import { useState } from "react";
import { Link } from "react-router-dom"
import { Col,Row,Card } from "react-bootstrap"
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
              <a href='/#about' className='page-scroll'>
                About
              </a>
            </li>

            <li>
              <a href='/#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li className="dropdown">
              <Link to='#'>Courses</Link>
              <ul className="dropdown-content" as={Card} >
                <Col md={4}>
                  <h4>Beginners Courses </h4>
                    {props.data ? props.data.Beginners.map((langs,beginner) =>(
                      <li key={beginner}><Link className="link" to={`/Course/${langs.name}`}>{langs.name}</Link></li>
                    )) :'loading...'}
                </Col>
                <Col md={4}>
                <h4>Intermediate Courses </h4>
                    {props.data ? props.data.Intermediate.map((langs,Intern) =>(
                      <li key={Intern}><Link className="link"  to={`/Course/${langs.name}`}>{langs.name}</Link></li>
                    )) :'loading...'}
                </Col>
                <Col md={4}>
                <h4>Advanced Courses </h4>
                    {props.data ? props.data.Advanced.map((langs,advanced) =>(
                      <li key={advanced}><Link  className="link" to={`/Course/${langs.name}`}>{langs.name}</Link></li>
                    )) :'loading...'}
                </Col>
                  
              </ul> 
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                
                Contact
              </a>
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
          </ul>
        </div>
      </div>
    </nav>
  )
}






