import React from 'react';
import { Form ,Button, Container, Row,Col} from 'react-bootstrap';
import Wall from '../images/coding-wallpaper.jpg'
export default function Login() {
    console.log('login');
  return(
    <div className='parent' style={{display:'flex',paddingTop:100}}>
        
        
        <div className='login'>
            <img src={Wall} alt="wallpaper" srcset="" />
        </div>
        <Container id='cont'>
        <h2 className='text-center'>Login here</h2>
        <Form >
            <Form.Group  as={Row} className="mb-4" controlId="formBasicEmail">
                <Col sm={6} >
                    <Form.Label as='h3'>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Col>   
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={6}>
                <Form.Label as='h3'>Password</Form.Label>
                <Form.Control size='lg'  type="password" placeholder="Password" />
                </Col>  
            </Form.Group>
            <br />
            <Button className='text-center' variant="info" type="submit">Login</Button>
        </Form>
        </Container>
        
    </div>
  );
}
