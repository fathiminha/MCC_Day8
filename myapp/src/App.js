import './App.css';
import { BrowserRouter as Router,Routes,Route, Link,NavLink } from 'react-router-dom';
import Home from './components/Login'
import Dashboard from './components/Dashboard'
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/> } />
        <Route path='/dash' element={<Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
