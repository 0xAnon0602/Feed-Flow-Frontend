import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlowDiagram from './components/FlowDiagram';
import PredictionForm from './components/PredictionForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FlowDiagram />} />
          <Route path="/test" element={<PredictionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
