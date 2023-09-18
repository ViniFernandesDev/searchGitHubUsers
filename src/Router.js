import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Historic from './pages/Historic';

export default function Router() {
  return (
   <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/historic' element={<Historic/>} />
   </Routes>
  )
}
