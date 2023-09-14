import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Delete from './pages/Delete';
import Update from './pages/Update';
import Create from './pages/Create';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/notes/delete/:id" element={<Delete />}></Route>
      <Route exact path="/notes/update/:id" element={<Update />}></Route>
      <Route exact path="notes/create" element={<Create />}></Route>
    </Routes>
  )
}

export default App