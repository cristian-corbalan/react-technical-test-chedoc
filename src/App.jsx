import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import './App.css';
import { useSelector } from 'react-redux';

function App () {
  const section = useSelector(state => state.ui.section);

  return (
    <>
      <Header />

      {section === 'home' && <p>HOME</p>}
      {(section === 'movies' || section === 'series') && <p>Catalog</p>}

      <Footer />
    </>
  );
}

export default App;
