<template >
 <div  style="background-color: #c6b497;">
  <div class="abs-center" >
    <form action="#" class="border p-3 form" style="background-color: #cfd3ce; padding-bottom:100px;"  >
      <div class="form-group">
        <label>Nombre del libro</label>
        <input type="text" v-model="titulo" class="form-control" >
      </div>
      <div class="form-group">
        <label >Sinposis</label>
        <textarea class="form-control" v-model="sinopsis" placeholder="Ingrese aqui la información..."></textarea>
      </div>
      <div class="form-group">
        <label>Autor</label>
        <input type="text" v-model="autor" class="form-control">
      </div>
      <div class="form-group">
        <label>Categoria</label>
        <select class="form-control" v-model="Categoria" >
        <option v-for="cat in allCategorias" :value="cat.id" :key="cat.id">{{cat.name}}</option>
      </select>
      </div>
      <div class="form-group">
       <button type="submit" @click="nuevo"  class="btn btn-primary form-control">Guardar</button>
      </div>
      <div class="form-group">
        <label></label>
        <label>....</label>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const Crate_Libro = gql`
 mutation crearLibroMutation($titulo: String!, $sinopsis:String!,$autor:String!, $Categoria:Int){
  crearLibro(
    titulo:$titulo,
    sinopsis:$sinopsis,
    autor:$autor,
    Categoria:$Categoria
  )
  {
    id
    titulo
  }
}
`;
const GET_Libros = gql`
 query {
  allCategorias{
    name
    id
  }
}
`;

export default {
  data(){
      return{
          titulo:'',
          sinopsis:'',
          Categoria:'',
          autor:'',
          allCategorias:[]

      }
  },
  methods:{
      nuevo (){
          const titulo= this.titulo
          const sinopsis= this.sinopsis
          const autor = this.autor
          const Categoria= this.Categoria
          this.$apollo.mutate({
              mutation: Crate_Libro,
              variables:{
                  titulo,
                  sinopsis,
                  autor,
                  Categoria
              }
          }).then(function (response) {
              console.log(response)
              alert('Ingreso correcto')
              this.$router.go(-1)
      })
        .catch(function (error) {
          console.log(error)
        })
        this.$router.push('/');
      }
  },
  apollo: {
   allCategorias :{
     query: GET_Libros
   }
  }
}
</script>

<style>
.abs-center {
  display: flex;
  padding-top: 49px;
  justify-content: center;
  
}

.form {
  width: 450px;
}

</style>