import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Upload from './components/Upload';
import Working from './components/Working';
import Footer from './components/Footer';
import Home from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-darker text-light">
        <Navbar />
        {/* <div className="flex flex-1">
          <Sidebar /> */}
          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/working" element={<Working />} />
            </Routes>
          </div>
       <Footer />
      </div>
    </Router>
        
  );
}

export default App;