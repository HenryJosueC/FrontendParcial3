<template>
  <div id="app">
    <NabVar></NabVar>
    <libros></libros>
  </div>
</template>

<script>
import NabVar from './components/NabVar.vue'
import Libros from './components/Libros.vue'
export default {
  name: 'App',
  components: {
    NabVar,
    Libros
  }
}
</script>

<style>
</style>
