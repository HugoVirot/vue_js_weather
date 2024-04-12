<script setup>
import { useWeatherStore } from '@/stores/weather';
import CityWeather from './CityWeather.vue';

const store = useWeatherStore()
const citiesList = store.citiesList
console.log(citiesList);

</script>

<template>

  <div class="container-md">

    <div class="row">

      <div v-for="(cityWeather, city) in citiesList" :key="cityWeather.id" class=" col-sm-6 col-md-4 col-lg-3">

        <CityWeather :weather="cityWeather" />
      </div>

    </div>

  </div>

</template>