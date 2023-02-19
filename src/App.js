import {  Routes, Route } from 'react-router-dom'
import Form from "./Form";
import LoginPage from './Login/LoginPage';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/form" element={<Form />}>

       </Route>
       <Route path="/" element={<LoginPage />}></Route>
    </Routes>
    </>
  );
}
  
  export default App;