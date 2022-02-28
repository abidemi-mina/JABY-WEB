import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function Detail(props){
    const id = useParams().name
    const {begin,intern,advance} = props
   
   console.log(props.intern);
  return(
<div>
            <Card>
                <Card.Header>
                    <h1>hey peeps aw you doing</h1>
                </Card.Header>
                <Card.Title>
                    {begin?.filter(begin=> begin.name === id).map(begin =>
                    <> 
                    <CardGroup key={begin.name}>
                        <h1> Beginner Course</h1>
                        <h3>{begin?.name}</h3> 
                        <blockquote>{begin.description}</blockquote> 
                    </CardGroup>
                        
                    </>
                                         
                    )}
                    {intern?.filter(intern=> intern.name === id).map(intern =>
                       <>
                       <CardGroup key={intern.name}>
                            <h1> Intmerdiate Course</h1>
                            <h3>{intern?.name}</h3>
                       </CardGroup>
                        
                       </>
                    )}
                    {advance?.filter(advance=> advance.name === id).map(advance =>
                        <>
                        <CardGroup key={advance.name}> 
                            <h1> Advanced Course</h1>
                            <h3>{advance?.name}</h3>
                        </CardGroup>
                            
                        </>
                    )}
                </Card.Title>
            </Card>
            
        </div>
   );
}
