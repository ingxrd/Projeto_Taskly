
// import contexto
import { UserContext } from "./context/UserContext";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import páginas
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import Aboutus from './pages/Aboutus';
import Tasks from './pages/Tasks';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';
import NotFound from './pages/NotFound';


// import estilização
import './App.css';

// import outros
import { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/config";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false); 
    });
    }, []);

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider value={{user}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/new" element={<NewTask />} />
          <Route path="/tasks/editar/:id" element={<EditTask />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </UserContext.Provider>
  );
}

export default App;
