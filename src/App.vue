<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from "./components/template/HeaderNav.vue"
import FooterApp from './components/template/FooterApp.vue';
import CitiesList from './components/views/CitiesList.vue';
import SearchForm from './components/views/SearchForm.vue';
</script>

<template>
  <div id="wrapper">
    <HeaderNav />

    <div class="container-fluid" v-if="$route.path == '/'">
      <!-- si la route est / (racine du site) -->

      <img class="pt-3" id="banner" alt="banner" src="./assets/weatherbanner.png" />

      <div id="texts" class="mx-auto">
        <h1 class="my-5">
          Vue JS Weather
        </h1>
        <p class="fs-4"> Consultez la météo de votre ville et du monde entier
        </p>
      </div>

      <div class="container p-5">
        <h2 class="mb-5">Rechercher une ville</h2>
        <SearchForm />
      </div>

      <div class="container p-5">
        <h2 class="mb-5">Liste des villes</h2>
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

<style>
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

#banner {
  width: 105vw;
  margin: 0;
  padding: 0;
}

.container-fluid {
  padding: 0 !important;
  margin: 0
}

#texts {
  color: white;
  position: absolute;
  top: 30%;
  left: 35%
}

h1 {
  letter-spacing: 1vw;
  font-size: 4rem !important;
}

h2 {
  letter-spacing: 0.5vw;
}

a {
  text-decoration: none !important;
  color: inherit !important
}
</style>
