import React from 'react'
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/screens/Dashboard';


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path=''element={<Dashboard/>} />
        </Routes>
      </Router>

    </Container>
  )
}

export default App

const Container =styled.div`

  

`