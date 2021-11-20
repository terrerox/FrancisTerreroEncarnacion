import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Home from './pages/Home'
import User from './pages/User'
import Department from './pages/Department'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<User />} />
            <Route path="departments" element={<Department />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
