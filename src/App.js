import React ,{useEffect, useContext}from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './Store/PostContext'
import {AuthCotext, FirebaseContext} from './Store/FirebaseContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {

  const {setUser} = useContext(AuthCotext);
  const {firebase} = useContext(FirebaseContext);


  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })


  return (
    <div>
      <Post>

        <Router>
          <Routes>
              <Route  path = '/' element = {<Home />} />
              <Route  path = '/signup' element = {<Signup />} />
              <Route  path = '/login' element = {<Login />} />
              <Route  path = '/create' element = {<Create />} />
              <Route path='/viewpost' element = {<ViewPost/>} />
          </Routes>
        </Router>
        
      </Post>
    </div>
  );
}

export default App;
