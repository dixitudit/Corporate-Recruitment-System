import './App.css'
import IndexPage from './Pages/IndexPage'
import Login from './Pages/Login'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
