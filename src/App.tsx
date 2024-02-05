import './App.css'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Naver from './naver/Naver'

const Direct11st = React.lazy(() => import('./11st/Direct11st'))
const NotFound = React.lazy(() => import('./error/NotFound'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/11st"
          element={
            <React.Suspense fallback={<></>}>
              <Direct11st />
            </React.Suspense>
          }
        />
        <Route
          path="/naver"
          element={
            <React.Suspense fallback={<></>}>
              <Naver />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<></>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const Home: React.FC = () => {
  window.location.replace('https://github.com/boostcampwm2023/and09-PriceGuard')
  return <></>
}

export default App
