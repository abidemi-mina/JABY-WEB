import React from 'react';
import { Form,Button, Container ,Row,Col} from 'react-bootstrap';
import Wall from '../images/coding-wallpaper.jpg'

export default function Register(props) {
    console.log(props);
  return(
    <div className='parent' style={{display:'flex',paddingTop:100,justifyContent:'space-between'}}>
        
        
        <div  className='login'>
            <img src={Wall} alt="wallpaper" srcset="" />
        </div>
        <Container id='form'>
            <h2 className='text-center pt-5'>Register here</h2>
        <Form className='col-sm-12' >
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
            <Form.Group as={Row} className="mb-3" >
                <Col sm={8}>
                <Form.Label as='h4'>Country/Region</Form.Label>
                <Form.Control as='select'  type="select" placeholder='select'>
                    {props.data? props.data.map((code) =>(
                        <option value={code.code}>{code.name}</option>
                    )):'loading'}
                </Form.Control>
                </Col>  
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Col sm={10}>
                <Form.Check  type="checkbox" >
                <Form.Check.Input type='checkbox' isValid checked /> &nbsp;I agree that JABY may send me marketing messages
                </Form.Check>
                </Col>  
            </Form.Group>
            <br />
            <Form.Group as={Row} className="mb-4">
                <Form.Text  as='p' id="passwordHelpBlock" muted className='col-sm-8'>
                    
                    Your password must be 8-20 characters long, contain letters and numbers, and
                    must not contain spaces, special characters, or emoji.
                </Form.Text>
            </Form.Group>
        
            <Form.Group >
                <Button className='text-center' variant="info" type="submit">Create an account</Button>
            </Form.Group>
        
        </Form>
        </Container>

    </div>

   
    
  );
}
