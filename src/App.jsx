import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './component/users/index/Index'
import Create from './component/users/create/Create'
import Details from './details/Details'
import Edit from './component/users/Edit'

export default function App() {
  return (
   <Routes>
    <Route path='/' />
    <Route path='/users/index'  element={<Index />} />
    <Route path='/users/create' element= {<Create />} />
    <Route path='/users/:id'  element={<Details />} />
    <Route path='/users/edit/:id'  element={<Edit />} />
    
   </Routes>
  )
}
