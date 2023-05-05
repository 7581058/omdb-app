import { Store } from '../core/core'

const store = new Store({
  searchText: '',
  searchYear: '',
  page: 1,
  pageMax: 1,
  showPage: 20, //검색했을 때 한 번에 보일 목록 수
  movies: [],
  movie: {},
  message: 'Search for the movie title',
  listLoading: false,
  modal: false,
  contents: false,
  movieID: '',
  muted: true,
  total: 1
})

export default store

export const searchMovies = async () => {
  store.state.listLoading = true

  if (store.state.page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try {
    for (let i = 1; i <= store.state.showPage / 10; i += 1) {
      const res = await fetch(
        `https://omdbapi.com?apikey=14c167f8&s=${store.state.searchText}&y=${store.state.searchYear}&page=${store.state.page}`
      )
      const { Search, totalResults, Response, Error } = await res.json()
      if (Response === 'True') {
        store.state.movies = [...store.state.movies, ...Search]
        store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        store.state.total = totalResults
      } else {
        store.state.message = Error
        store.state.pageMax = 1
      }

      if (store.state.page < store.state.pageMax) {
        store.state.page += 1
      } else if (store.state.page >= store.state.pageMax) {
        break
      }
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
