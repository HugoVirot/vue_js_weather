import CitiesList from '@/components/views/CitiesList.vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {

  state: () => {
    return {
      citiesList: [],
    }
  },

  actions: {
    // stocker la météo des villes dans le state
    // clé: nom ville => valeur : météo
    storeCityWeather(payload) {
      this.citiesList[ this.citiesList.length] = payload
      // this.citiesList[payload.name] = payload
    },
  }
})