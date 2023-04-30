import React from 'react';
import './App.scss';
import { Footer } from './Footer';
import { Header } from './Header';
import { CeoPage } from './pages/CeoPage/CeoPage';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <>
    <Header />
    <main>
      <HomePage />
    </main>
    <Footer />
    </>
  );
}

export default App;
