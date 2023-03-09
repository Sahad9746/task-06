import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import SideBar from "./components/screens/includes/SideBar";
import RightBar from "./components/screens/includes/RightBar";
import Mycards from "./components/screens/Mycards";
import Saving from "./components/screens/Saving";
import Settings from "./components/screens/Settings";
import Transaction from "./components/screens/Transaction";

function App() {
  return (
    <Container>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="mycards" element={<Mycards />} />
          <Route path="saving" element={<Saving />} />
          <Route path="settings" element={<Settings />} />
          <Route path="transaction" element={<Transaction />} />
        </Routes>
        <RightBar />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
`;
