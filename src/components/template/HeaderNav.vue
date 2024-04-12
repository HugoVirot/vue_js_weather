<template>
  <header class="fixed-top">
      <nav class="navbar bg-primary navbar expand-lg p-3" data-bs-theme="dark">

        <!-- <img class="pt-3" alt="banner" src="../../assets/weatherbanner.png" style="width: 100vw; height: 15vh" /> -->

        <div class="container-fluid">

          <a class="navbar-brand" href="#">
            <router-link to="/" class="link mx-5  text-white" id="titreNav">Vue JS Weather</router-link>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">

            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/secondview" class="link text-center nav-link text-white mx-5">secondview</router-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
  </header>
</template>

<style scoped>
</style>