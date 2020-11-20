<template >
 <div  style="background-color: #c6b497;">
  <div class="abs-center" >
    <form action="#" class="border p-3 form" style="background-color: #cfd3ce; padding-bottom:100px;"  >
      <div class="form-group">
        <label>Nombre del libro</label>
        <input type="text" class="form-control" >
      </div>
      <div class="form-group">
        <label >Sinposis</label>
        <textarea class="form-control" placeholder="Ingrese aqui la información..."></textarea>
      </div>
      <div class="form-group">
        <label>Autor</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Categoria</label>
        <select class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      </div>
      <div class="form-group">
       <button type="submit"  class="btn btn-primary form-control">Guardar</button>
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
export default {
  data(){
      return{
          titulo:'',
          sinopsis:'',
          categoria:'',
          autor:''

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