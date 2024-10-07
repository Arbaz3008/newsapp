import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={12} category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={12} category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={12} category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={12} category="health" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={12} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={12} category="technology" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
