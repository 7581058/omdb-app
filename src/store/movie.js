import { Store } from '../core/core'

const store = new Store({
  searchText: '',
  searchYear: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  message: 'Search for the movie title',
  listLoading: false,
  modal: false,
  contents: false,
  movieID: '',
  muted: true
})

export default store

export const searchMovies = async page => {
  store.state.listLoading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=14c167f8&s=${store.state.searchText}&y=${store.state.searchYear}&page=${store.state.page}`
    )
    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === 'True') {
      store.state.movies = [...store.state.movies, ...Search]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.listLoading = false
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=14c167f8&i=${id}&plot=full`
    )
    store.state.movie = await res.json()
    store.state.contents = true
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
