import React, { useState } from 'react';

function App() {
  // Define a state variable to track message visibility
  const [showMessage, setShowMessage] = useState(true);

  // Function to toggle message visibility
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="App">
      <h1>HelloWorld, I am into tech as a Cloud Engineer!</h1>
      {/* Conditional rendering based on the state */}
      {showMessage && <p>This is a message you can toggle.</p>}
      {/* Button to toggle the message */}
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
    </div>
  );
}

export default App;

