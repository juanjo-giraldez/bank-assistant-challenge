import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Information from './views/ProductInformation/Information';
import Form from './views/Form/Form';
import ViewFeedBack from './views/Feedback/ViewFeedBack';
import Access from './views/Access/Access';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/information" />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/feedBack" element={<ViewFeedBack />} />
        <Route exact path="/Access" element={<Access />} />
      </Routes>
    </Router>
  );
}

export default App;
