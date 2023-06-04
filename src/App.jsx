import './App.css'
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import { Box } from '@mui/material';

function App() {

  return (
    <Box>
      <Routes >
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Box>
  )
}

export default App
