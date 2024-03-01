import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Teste from './pages/Teste'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/teste' element={<Teste />} />
    </Routes>
  )
}
