import './App.css';
import DisplayFood from './components/Display Food/DisplayFood';
import Header from './components/Header/Header';
import MenuList from './components/Menu list/MenuList';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPage setShowLogin={setShowLogin}/> : <></>}
      <div className="App container-fluid">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
      <MenuList /> 
      <DisplayFood />   
      <Footer />
      </div>
    </>
  );
  
}

export default App;
