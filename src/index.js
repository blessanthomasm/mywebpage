import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home'
import Clg from './gal'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Iv from './industialv'
import Hostel from './Hostel'
import Sslc from './Sslc'
import Favourite from './favorite'
import Resume from './Resume'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="gallery/clg" element={<Clg />} />
      <Route path="gallery/iv" element={<Iv />} />
      <Route path="gallery/hostel" element={<Hostel />} />
      <Route path="gallery/sslc" element={<Sslc />} />
      <Route path="fav/favorite" element={<Favourite />} />
      <Route path="/resume" element={<Resume />} />

      <Route
        path="/gallery"
        element={
          <Home>
            {' '}
            <HashLink to="/#gallery"></HashLink>
          </Home>
        }
      />
    </Routes>
  </BrowserRouter>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
