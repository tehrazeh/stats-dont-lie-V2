import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Content/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Player from './Pages/Player/Player';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Player' element={<Player/>}/>   
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
