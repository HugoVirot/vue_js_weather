<script setup>
import { ref } from "vue"
import axios from "axios"
import { useWeatherStore } from "@/stores/weatherStore";

const search = ref('')
const errorMessage = ref('')
const apiKey = "0b7b0f66fedd5755eb79eb5bbedf4b03"
const store = useWeatherStore()

axios.defaults.headers.common['Accept'] = 'application/json';

const searchCity = async () => {

        if (search.value.length > 2) { // on ne lance la recherche qu'à 3 caractères minimum

                // on récupère la météo de la ville
                await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&lang=fr&units=metric`)
                        .then(response => {
                                // on la stocke dans le store
                                store.storeCityWeather(response.data)
                                //console.log(store.citiesList);
                        })
                        .catch(error => {
                                console.log(error)
                                // en cas d'erreur, on affiche un message indiquant que la ville n'existe pas) ou le message reçu (autres cas)
                                if (error.response.data.message == "city not found") {
                                        errorMessage.value = "La ville n'existe pas"
                                } else {
                                        errorMessage.value = error.message
                                }
                                // le message disparaît au bout de 5 secondes
                                setTimeout(() => errorMessage.value = '', 5000)
                        })
        } else {
                errorMessage.value = "Nom de ville trop court : merci de saisir au moins 3 caractères."
        }
}

</script>

<template>
        <p v-if="errorMessage != ''" class="text-white bg-danger w-50 p-3 mx-auto rounded-pill">{{ errorMessage }}</p>
        <form @submit.prevent="searchCity">
                <input type="text" v-model="search">
                <button type="submit" class="btn btn-primary">Valider</button>
        </form>
</template>
