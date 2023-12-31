import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForm from './pages/loginForm/LoginForm.jsx';
import Patients from './pages/Patients/Patients.jsx';
import Doctor from './pages/Doctor/Doctor.jsx';
import Reception from './pages/Reception/Reception.jsx';
import './style/App.css'
import { useState, useEffect } from 'react';
function App() {
  const [doctor, setDoctor] = useState('')
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const doctorName = searchParams.get('doctor')
    setDoctor(doctorName);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/schedula" element={<Patients />}/>
        <Route path="/:doctor" element={<Doctor />}/>
        <Route path='/reception' element={<Reception />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
