import './App.css'
import MovieCard from './component/MovieCard'


function App() {
  return (
    <>
      <MovieCard movie={{ title: "Nii's Film", release_date: "2024" }} />
    </>
  )
}

export default App
