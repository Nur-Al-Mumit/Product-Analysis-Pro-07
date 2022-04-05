import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Dshboard from './Components/Dshboard/Dshboard';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='Dshboard' element={<Dshboard></Dshboard>}></Route>
        <Route path='About' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
