import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import './App.css';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home.jsx';

function App () {
  const section = useSelector(state => state.ui.section);

  return (
    <>
      <Header />

      {section === 'home' && <Home />}
      {(section === 'movies' || section === 'series') && <p>Catalog</p>}

      <Footer />
    </>
  );
}

export default App;
