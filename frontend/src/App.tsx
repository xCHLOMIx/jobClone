import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className='font-main'>
        <Navbar />

      </div>
    </BrowserRouter>
  )
}

export default App
