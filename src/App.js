import { Routes, Route } from 'react-router';
import './App.css';
import Homepage from './pages/Homepage';
import EmployeeList from './pages/EmployeList';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/Employee' element={<EmployeeList />} />
    </Routes>
    </div>
  );
}

export default App;
