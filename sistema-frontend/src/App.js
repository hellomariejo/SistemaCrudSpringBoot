 
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import AddPersona from './persona/AddPersona';
import EditPersona from './persona/EditPersona';
import ViewPersona from './persona/ViewPersona';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addpersona" element={<AddPersona />}/>
        <Route exact path="/editpersona/:id" element={<EditPersona />}/>
        <Route exact path="/viewpersona/:id" element={<ViewPersona />}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
