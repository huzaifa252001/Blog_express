import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>My Blog App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/create">Create Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
