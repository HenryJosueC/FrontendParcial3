<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #839b97;">
  <a class="navbar-brand text-light" href="#"><router-link to="/" class="navbar-brand text-light">Inicio</router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href=""><router-link to="/nuevo" class="nav-link">Nuevo ingreso</router-link></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn my-2 my-sm-0 text-light" type="submit" style="background-color: #34626c;">Buscar</button>
    </form>
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
