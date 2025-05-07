import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { TodoPage } from './pages/todo'
import { IndexPage } from './pages/index'
import { ContactPage } from './pages/contact'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
