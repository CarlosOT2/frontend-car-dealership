//# Components //
import LanguageSync from './components/LanguageSync'
import Header from './components/header/header'
import Home from './components/home/home'
import Search from './components/search/search'
import Footer from './components/footer/footer'
//# Libs //
import { Routes, Route, Navigate } from "react-router-dom";
import GetDefaultLn from './shared/utils/GetDefaultLn'
//# Classes //
import './App.scss'

// https://www.autoscout24.com/
// template example website

function App() {
  return (
    <>
      <LanguageSync />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={`/${GetDefaultLn()}`} replace />} />
          <Route path=":ln" element={<Home />} />
          <Route path=":ln/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
