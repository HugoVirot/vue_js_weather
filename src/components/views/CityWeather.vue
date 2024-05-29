<script setup>

const props = defineProps({
    weather: {
        type: Object,
        required: true
    }
})

import { useWeatherStore } from '@/stores/weatherStore';
const store = useWeatherStore()

</script>

<template>
    <div class="card text-center">
        <h5 class="card-header bg-primary text-white fw-bold">{{ weather.name }}</h5>
        <div class="card-body">
            <p><img class="mx-auto rounded-circle bg-primary" :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="icône temps">
            </p>
            <h5 class="card-title">{{ Math.round(weather.main.temp) }}°C</h5>
            <p class="card-text">{{ weather.weather[0].description }}</p>
        </div>
        <button class="btn btn-danger w-50 mx-auto mb-3" @click="store.removeCityWeather(props.weather.id)">supprimer</button>
    </div>
</template>
