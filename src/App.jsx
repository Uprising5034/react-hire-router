import { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/view/:id" element={ <PersonProfile  />} />
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>}/>
      </Routes>
    </>
  );
}
