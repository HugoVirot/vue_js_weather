<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from "./components/template/HeaderNav.vue"
import FooterApp from './components/template/FooterApp.vue';
import CitiesList from './components/views/CitiesList.vue';
import SearchForm from './components/views/SearchForm.vue';

import { useWeatherStore } from './stores/weatherStore';
const store = useWeatherStore()
</script>

<template>
  <div id="wrapper">
    <HeaderNav />

    <div class="container-fluid" v-if="$route.path == '/'">
      <!-- si la route est / (racine du site) -->

      <div id="hero" class="d-flex justify-content-center align-items-center">
        <div class="m-auto">
          <h1 class="">
            Vue JS Weather
          </h1>
          <p class="fs-4"> Consultez la météo de votre ville et du monde entier !
          </p>
        </div>
      </div>

      <div class="container p-5">
        <h2 class="mb-4">Rechercher une ville</h2>
        <SearchForm />
      </div>

      <div class="container p-5">
        <h2 class="mb-4">Liste des villes</h2>
        <button v-if="store.citiesList.length > 0" class="btn btn-danger mb-4" @click="store.$reset">effacer la
          liste</button>
        <CitiesList />
      </div>

    </div>

    <div class="container-fluid" v-else>
      <!-- si la route est différente de / -->
      <router-view v-bind:key="$route.fullPath"></router-view>
    </div>

    <FooterApp />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oxygen");

#app {
  overflow-x: hidden;
  max-width: 100vw;
  margin: 0;
  padding: 0
}

#wrapper {
  width: 100vw;
  font-family: "Oxygen", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
}

.container-fluid {
  padding: 0 !important;
  margin: 0
}

#hero {
  color: white;
  height: 60vh;
  background-image: url('./assets/weatherbanner.png');
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
}

h1 {
  letter-spacing: 1vw;
  font-size: 4rem !important;


  @media screen and (max-width: 768px) {
    font-size: 3rem !important;
  }
}

h2 {
  letter-spacing: 0.5vw;
}

a {
  text-decoration: none !important;
  color: inherit !important
}
</style>
