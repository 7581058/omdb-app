import { Store } from '../core/core'

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
  message: 'Search for the movie title'
})

export default store

export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=14c167f8&s=${store.state.searchText}&page=${page}`
  )
  const { Search, totalResults, Response, Error } = await res.json()
  if (Response === 'True') {
    store.state.movies = [...store.state.movies, ...Search]
    store.state.pageMax = Math.ceil(Number(totalResults) / 10)
  } else {
    store.state.message = Error
  }

  store.state.loading = false
}
