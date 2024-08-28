import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
// import Dashboard from './Dashboard';
// import BookManagement from './BookManagement';
// import UserManagement from './UserManagement';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/book-management" element={<BookManagement />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
