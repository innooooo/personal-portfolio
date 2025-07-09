import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contacts from '../pages/Contacts';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Hero/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='*' element={<Hero/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
