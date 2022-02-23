// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import 

import { Link } from "react-router-dom"

export const Services = (props) => {
  console.log(props.data)
  // const{ data }=props;
 

  // for (let index = 0; index < data.length; index++) {
  //   const element = data[index];
  //   console.log(element);
  // }
  //  console.log(url)

  //  useEffect(()=>{
  //    axios.get(url).then(({data})=>{
  //       // setFirst(data)
  //       console.log(data);
  //    });
  //  });
  //  console.log(first);
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Courses</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {props.data
            ?props.data.Beginners.map((d, i) => (
                <div key={`${d}-${i}`} className='col-md-4'>
                  {' '}
                  <img className="" src={d.logo} alt={d.name} width={'200px'} height={'200px'} />
                  <div className='service-desc'>
                    <h3>
                      <Link to={`/Course/Beginners/${d.name}`} >{d.name}...</Link> 
                    </h3>
                    {/* <p>{d.name}</p> */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
