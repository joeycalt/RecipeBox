import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Main from './components/Main'
import About from './components/About'

function App() {
  return (
    <>
    <div className="App">
      <div>
     <Header />
     <Routes>
        <Route exact path ='/' element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
