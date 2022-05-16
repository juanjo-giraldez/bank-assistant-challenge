import React from 'react';

import './App.scss';
import Information from './views/ProductInformation/Information';
import ViewFeedBack from './views/Feedback/ViewFeedBack';
import Form from './views/Form/Form';

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <Information title="esto es un componente" />
        <ViewFeedBack success />
        <Form />
      </main>
    </div>
  );
}

export default App;
