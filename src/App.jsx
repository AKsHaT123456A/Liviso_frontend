import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import JoinScreen from './JoinScreen';
import CallScreen from './CallScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes as the top-level container */}
          <Route path="/" element={<JoinScreen />} />
          <Route path="/call" element={<CallScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
