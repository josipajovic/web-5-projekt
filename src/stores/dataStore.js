import { defineStore } from 'pinia'
import axios from 'axios'
import { unref } from 'vue'

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    data: [],
    watchList: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/88b98123-e433-43b0-bd8e-75a7d1b45413',
        )
        this.data = response.data.map((movie, index) => ({
          ...movie,
          id: `${index}`,
        }))
      } catch (err) {
        this.error = 'Failed to fetch data'
        console.error('Fetch error:', err)
      } finally {
        this.loading = false
      }
    },

    addToList(movie) {
      const movieValue = unref(movie)
      const isAlreadyInList = this.watchList.some((item) => item.id === movieValue.id)

      if (!isAlreadyInList) {
        this.watchList.push(movieValue)
        console.log(`${movieValue.title} added to the watch list.`)
        return true
      } else {
        console.log(`${movieValue.title} is already in the watch list.`)
        return false
      }
    },

    removeFromList(id) {
      const movie = this.watchList.find((movie) => movie.id === id)
      if (movie) {
        console.log(`${movie.title} removed from the watch list.`)
        this.watchList = this.watchList.filter((movie) => movie.id !== id)
      } else {
        console.log(`Movie with ID ${id} not found in the watch list.`)
      }
    },
  },
  persist: {
    key: 'dataStore',
    paths: ['watchList'],
  },
})
