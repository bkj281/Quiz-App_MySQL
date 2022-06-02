import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import SVGComponent from '../assets/s.svg';
import Spinner from '../assets/Spinner.svg';

const QuizPage = () => {

  const [que, setQue] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState([]);
  const [curr, setCurr] = useState({});
  const [loading, setLoading] = useState(false);
  const [per, setPer] = useState([]);
  const [acc, setAcc] = useState([]);

  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch (`${process.env.REACT_APP_BASE_URL}/quiz/view-questions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await res.json();
      // console.log(result);
      setQuestions(result);
      setCurr(result[que]);
      setLoading(false);
      setPer(performance.now());
    } catch (err) {
      console.log(err);
    }
  }

  const checkAns = (ans) => {
    const now = performance.now();
    const p = [...time];
    p.push((now-per)/1000);
    setTime(p);
    if (ans === curr.ans) {
      const ac = [...acc];
      ac.push(true);
      setAcc(ac);
    }
    else {
      const ac = [...acc];
      ac.push(false);
      setAcc(ac);
    }
  
    setQue(que+1);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setCurr(questions[que]);
    setPer(performance.now());
  }, [que, curr]);

  return (
    <>
      <Container>
        <Row className='mt-3 text-center'>
          <Col>
            <h1>Quiz App</h1>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col xs={12} md={6}>
            <img src={SVGComponent} style={{height: "400px", width: "auto"}} alt='Tasvir' className='d-block mx-auto' />
          </Col>
          <Col xs={12} md={6}>
            {loading? <img src={Spinner} alt='Loader' style={{height: "150px", width: "auto"}} className='d-block mx-auto' />: que === 5? navigate('/score', { state: { acc: acc, time: time }}): <><h3 className="my-5">{curr.question}</h3>
            <Button value={curr.a} className='mx-5 my-3 w-25' onClick={() => checkAns(curr.a)}>{curr.a}</Button>
            <Button value={curr.b} className='mx-5 my-3 w-25' onClick={() => checkAns(curr.b)}>{curr.b}</Button>
            <Button value={curr.c} className='mx-5 my-3 w-25' onClick={() => checkAns(curr.c)}>{curr.c}</Button>
            <Button value={curr.d} className='mx-5 my-3 w-25' onClick={() => checkAns(curr.d)}>{curr.d}</Button>
            </>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default QuizPage;