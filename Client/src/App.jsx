import './App.css';
import IndexPage from './Pages/IndexPage';
import Login from './Pages/Login';
import Jobs from './Pages/Jobs';
import {Route, Routes} from 'react-router-dom';
import NotFound from './Pages/NotFound';
import axios from "axios";

axios.defaults.baseURL = 'https://localhost:5000';

function App() {

  
  return (
    <Routes>
      <Route index element={<IndexPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="*" element={<NotFound/>}/>  
    </Routes>
  )
}

export default App
