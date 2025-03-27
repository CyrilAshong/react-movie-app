import './css/App.css'
import MovieCard from './component/MovieCard'
import NavBar from './component/NavBar'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}

export default App
