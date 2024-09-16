import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Rental } from './pages/rental';
import { Error } from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rental/:id" element={<Rental />} />{' '}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
