
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Contact from './User/Pages/Contact'
import Books from './User/Pages/Books'
import Auth from './pages/Auth'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import AdminResource from './Admin/Pages/AdminResource'
import AdminSettings from './Admin/Pages/AdminSettings'
import Preloader from './components/Preloader'
import { useState } from 'react'


function App() {
  const [loading,setloading]=useState(true)

  setTimeout(() => {
    setloading(false)
  }, 4000);

  return (
    <>
      <Routes>
        <Route path='/' element={loading?<Preloader/>:<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />

        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />

      </Routes>
    </>
  )
}

export default App
