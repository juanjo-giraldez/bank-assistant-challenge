import React from 'react';

const ViewFeedBack = (props) => {
  const { success } = props;
  return (
    <div>
      <h1>Esta es la vista Feedback</h1>
      <h3>View Feedback</h3>
      <h3>YUuhuu!!</h3>
      {success ? (
        <h1>Tu password manager hay sido creado con éxito!!</h1>
      ) : (
        <h1>Habido un error</h1>
      )}
    </div>
  );
};

export default ViewFeedBack;
