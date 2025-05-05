import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import JobsPage from './page/JobsPage'

function App() {

  return (
    <BrowserRouter>
      <div className='font-main h-screen'>
        <Navbar />
        <div className='p-5 bg-bg h-full'>
          <Routes>
            <Route
              path='/'
              element={<JobsPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
