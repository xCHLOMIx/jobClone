import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import JobsPage from './pages/JobsPage'
import NewJob from './pages/NewJob'
import JobDetails from './pages/JobDetails'

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
            <Route
              path='/job/new'
              element={<NewJob />}
            />
            <Route
              path='/job/:id'
              element={<JobDetails />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
