import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Contect/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Player from './Pages/Player/Player';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Player' element={<Player/>}/>   
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
