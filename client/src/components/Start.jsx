import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Start = () => {

  const navigate = useNavigate();

  const start = () => {
    navigate('/questions');
  }

  return (
    <>
      <Container>
        <Row style={{ height: "100vh" }} className='align-content-center'>
          <Col>
            <Button size="lg" variant="outline-primary" className='d-block m-auto' onClick={start}>
              Start Quiz
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Start;