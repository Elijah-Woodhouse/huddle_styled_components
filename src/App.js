import { ThemeProvider } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import {card_content, produce_content} from './content'
import SignUpForm from './components/SignUpForm'

const theme = {
  colors: {
    nav: '#658864', 
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {

  const navigate = useNavigate()
  


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={
            <>
            <Nav />
            <Header />
            <Container>
              {card_content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Container>
          </>} />
          <Route path="/signup" element={<SignUpForm/>} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
