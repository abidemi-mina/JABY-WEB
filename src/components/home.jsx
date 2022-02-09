import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { About } from "./about"
import { Contact } from "./contact"
import { Gallery } from "./gallery"
import { Services } from "./services"
// import SmoothScroll from "smooth-scroll";
import { Team } from "./Team"
import { Testimonials } from "./testimonials"


export const Home = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const header=landingPageData.Header
  console.log(header);
  
  return (
    
    <div>
      <header id='header'>
    <div className='intro'>
      <div className='overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 intro-text'>
              <h1>
                {header? header.title : 'Loading'}
                <span></span>
              </h1>
              <p>{header ? header.paragraph : 'Loading'}</p>
              <a
                href='#features'
                className='btn btn-custom btn-lg page-scroll'
              >
                Learn More
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
      
      <About as={Link} path='/#about' data={landingPageData.About} />
      <Services as={Link} path='/#services' data={landingPageData.Services} />
      <Gallery as={Link} path='/#gallery' data={landingPageData.Gallery}/>
      <Testimonials as={Link} path='/#testimonials' data={landingPageData.Testimonials} />
      <Team as={Link} path='/#team' data={landingPageData.Team} />
      <Contact as={Link} path='/#contact' data={landingPageData.Contact} />
    </div>
    </div>
    
    
  )
}