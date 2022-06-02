import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';
import Score from './Score';
import Start from './Start';

const Raste = () => {
    return (
      <Routes>
        <Route path='/' exact element={<Start />} />
        <Route path='/questions' element={<QuizPage />} />
        <Route path='/score' element={<Score />} />
      </Routes>
    );
}

export default Raste;
