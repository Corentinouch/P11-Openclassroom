import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './composant/Header';
import Footer from './composant/Footer';
import Home from './page/Home';
import Propos from './page/Propos'
import Details from './page/Details'
import Error from './page/Error'
import data from './data.json';

function App() {
  return (
    <Router>
      <Header />
          <Routes>
          <Route path="/" element={<Home data={data} />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="*" element={<Error />} />
            <Route path="/detail/:id" element={<Details data={data}/>} />
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
