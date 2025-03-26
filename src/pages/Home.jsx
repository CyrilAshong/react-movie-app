import MovieCard from "../component/MovieCard"

const movies = [
    { id: 1, title: "Jhon Wick", release_date: "2020" },
    { id: 2, title: "Homecoming", release_date: "2024" },
    { id: 3, title: "The Boys", release_date: "2019" }
]

function Home() {
    return (
        <div className="home">
            <div className="movie-grip">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    )
}

export default Home