import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main'
import About from './components/About'
import Landing from './components/Landing';

function App() {
  return (
    <>
    <div className="App">
      <div>
     <Header />
     <Routes>
        <Route exact path ='/' element={<Landing />} />
        <Route exact path ='/shuffler' element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
