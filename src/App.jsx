import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import HireForm from "./pages/PersonProfile/components/HireForm";

import "./App.css";

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
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/view/:id" element={<PersonProfile setHiredPeople={setHiredPeople}/>} />
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  );
}
