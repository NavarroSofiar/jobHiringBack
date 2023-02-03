import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateJobForm from './components/CreateJobForm/CreateJobForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route  path={"/api/jobs/:id"} element={<Detail/>} />
      <Route path='/admin' element={<CreateJobForm/>} />
      <Route path='/admin/edit-job/:id' element={<CreateJobForm/>} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
