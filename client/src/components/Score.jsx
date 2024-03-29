import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Score = () => {

  const location = useLocation();
  console.log(location.state.acc, location.state.time);

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let id = 0;
    let time = 0;
    for (let i = 0; i< 5; ++i) {
      if (location.state.acc[i])
        id += 1;
      time += location.state.time[i];
    }
    setScore(id);
    setTotal(time);
  }, []);

  let data = location.state.acc.map((a, id) => (
    <tr key={id}>
      <td>{id+1}</td>
      <td>{a?'Correct': 'Incorrect'}</td>
      <td>{location.state.time[id].toFixed(2)}</td>
    </tr>
  ));

  return (
    <>
      <Container>
        <Row className='mt-3 text-center'>
          <Col>
            <h1>Result</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Score: {score}/5</h2>
          </Col>
          <Col xs={6}>
            <h2>Time Taken: {total.toFixed(2)} (s)</h2>
          </Col>
        </Row>
        <Row>
          <Table striped hover responsive className="mt-5">
            <thead>
              <tr>
                <th>Question No.</th>
                <th>Result</th>
                <th>Time Taken (s)</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Score;