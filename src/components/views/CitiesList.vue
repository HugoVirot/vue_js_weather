<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import CityWeather from './CityWeather.vue';

const store = useWeatherStore()
</script>

<template>

  <div class="container-md">

    <div class="row">

      <div v-for="cityWeather in store.citiesList" :key="cityWeather.id"
        class="mx-auto col-sm-6 col-md-4 col-lg-3 mb-4">
        <CityWeather :weather="cityWeather" />
      </div>

    </div>

  </div>

</template>