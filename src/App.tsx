import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { CeoPage } from "./pages/CeoPage/CeoPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage/>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ceo" element={<CeoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />}/>
        </Routes> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
