import './App.css';
import ProductListingPage from './components/ProductListingPage';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;

