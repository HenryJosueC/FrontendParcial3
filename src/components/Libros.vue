<template>
<div>
<h1>Libros Disponibles</h1>
<div class="center">
  <div class="container">
  <div class="row">
    <div class="col-md-4" style="padding-top:15px" v-for="(libro, index) in allLibros" :key="index" >
      

  <div class="card" style="width: 18rem;">
  <div class="card-header" style="background-color: #c6b497;" >
    <span>Titulo</span>
    <h3>{{libro.titulo}}</h3>
  </div>
  
  <div class="card-body" style="background-color: #cfd3ce;" >
    <h5 class="card-title" >Sinopsis</h5>
    <p class="card-text">{{libro.sinopsis}}</p>
    <span>Autor {{libro.autor}}</span>
    <br/>
    <small>Categoria: {{libro.Categoria.name}}</small>
    
  </div>
</div>
</div>
    
  </div>
</div>
</div>
</div>
</template>

<script>
import gql from 'graphql-tag';

const GET_Libros = gql`
 query {
  allLibros{
    titulo
    sinopsis
    autor
    Categoria{
      name
    }
  }
}
`;
export default {
data(){
    return{
        allLibros:[],
    }
},
apollo: {
   allLibros :{
     query: GET_Libros
   }
  }
}
</script>

<style>

</style>