import React from 'react';
import { Form,Button, Container ,Row,Col, Card} from 'react-bootstrap';
import Wall from '../images/coding-wallpaper.jpg'

export default function Register() {
  return(
    <div style={{display:'flex',paddingTop:100,justifyContent:'space-between'}}>
        
        
        <div id='login' className='col-sm-12'>
            <img src={Wall} alt="wallpaper" srcset="" />
        </div>
        <Container  className="mw-xs mt-3">
        <Form className='col-sm-12' style={{backgroundColor:'lightgray',height:'50rem'}}>
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={8}>
                <Form.Label as='h4'>FullName</Form.Label>
                <Form.Control  type="text" placeholder="Fullname" />
                </Col>  
            </Form.Group>
            <Form.Group  as={Row} className="mb-3" controlId="formBasicEmail">
                <Col sm={8} >
                    <Form.Label as='h4'>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Col>   
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={8}>
                <Form.Label as='h4'>Public Username</Form.Label>
                <Form.Control  type="password" placeholder="Public Username" />
                </Col>  
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={8}>
                <Form.Label as='h4'>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" />
                </Col>  
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={10}>
                <Form.Check  type="checkbox" >
                <Form.Check.Input type='checkbox' isValid /> &nbsp;I agree that JABY may send me marketing messages
                </Form.Check>
                </Col>  
            </Form.Group>
            <br />
            <Form.Group as={Row} className="mb-4">
            <Form.Text id="passwordHelpBlock" muted className='col-sm-8'>
                Your password must be 8-20 characters long, contain letters and numbers, and
                must not contain spaces, special characters, or emoji.
            </Form.Text>
            </Form.Group>
            <br />
            <Form.Group >
            <Button className='text-center' variant="info" type="submit">Create an account</Button>
            </Form.Group>
        
        </Form>
        </Container>

    </div>

   
    
  );
}
