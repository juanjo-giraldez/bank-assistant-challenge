import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Information from './views/ProductInformation/Information';
import ViewFeedBack from './views/Feedback/ViewFeedBack';
import Form from './views/Form/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Information />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/feedBack" element={<ViewFeedBack />} />
      </Routes>
    </Router>
  );
}

export default App;
