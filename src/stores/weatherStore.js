import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weatherStore', {

  state: () => {
    return {
      citiesList: [],
    }
  },

  actions: {
    // stocker la météo d'un ville dans le state
    storeCityWeather(cityWeather) {
      //on vérifie si la ville est déjà présente
      if (this.citiesList.find(city => city.id == cityWeather.id)) {
        // si oui : message d'erreur
        alert("Ville déjà ajoutée dans la liste")
      } else {
        // si non : on l'ajoute
        this.citiesList.unshift(cityWeather)
      }
    },
    // retirer une ville de la liste
    removeCityWeather(id) {
      // on filtre la liste pour ne garder que les villes d'id différent 
      this.citiesList = this.citiesList.filter(city => city.id !== id)
      alert("suppression réussie")
    }
  }
})