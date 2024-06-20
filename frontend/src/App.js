import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Giris from './components/Giris';
import Kayıt from './components/Kayıt';

import Home from './components/Home';
import TekUrun from './components/TekUrun';
import NotFound from './components/NotFound';

import Cocuk from './components/Cocuk';
import Erkek from './components/Erkek';
import Kadin from './components/Kadin';

import Indırım from './components/Indirim';
import Blog from './components/Blog';




import './main.css';

import { Route, Routes } from 'react-router-dom'

import Favorilerim from './components/Favorilerim';
import Sepetim from './components/Sepetim';

function App() {
  return (
    <div className='d-flex flex-column'>
      <Navbar/>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/urun/:id' element={ <TekUrun/> }/>
        <Route path='/giris' element={ <Giris/> }/>
        <Route path='/kayit' element={ <Kayıt/> }/>

        <Route path='/indirimler' element={ <Indırım/> }/>
        <Route path='/blog' element={ <Blog/> }/>


        <Route path='/kadin' element={ <Kadin/> }/>
        <Route path='/erkek' element={ <Erkek/> }/>
        <Route path='/cocuk' element={ <Cocuk/> }/>

        <Route path='/favorilerim' element={ <Favorilerim/> }/>
        <Route path='/sepetim' element={ <Sepetim/> }/>



        <Route path='*' element={ <NotFound/> }/>
      </Routes>

      <Footer/>

      
    </div>
  );
}

export default App;
