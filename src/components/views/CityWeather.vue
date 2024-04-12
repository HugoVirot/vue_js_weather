<script setup>
defineProps({
    weather: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <h5 class="card-header">{{ weather.name }}</h5>
        <div class="card-body">
            <p><img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="icône temps">
            </p>
            <h5 class="card-title">{{ weather.main.temp }}</h5>
            <p class="card-text">{{ weather.weather[0].description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
