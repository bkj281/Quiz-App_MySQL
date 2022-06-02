import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';
import Score from './Score';

const Raste = () => {
    return (
      <Routes>
        <Route path='/' exact element={<QuizPage />} />
        <Route path='/score' exact element={<Score />} />
      </Routes>
    );
}

export default Raste;
