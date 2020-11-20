import Vue from 'vue';
import router from 'vue-router';

Vue.use(router);

export default new router({

    routes: [
        { 
          path: '/nuevo',
          name: 'Nuevo',
          component: () => import('../components/ingresarLibro.vue'),
        },
        { 
            path: '/',
            name: 'Libros',
            component: () => import('../components/Libros.vue'),
          }
    ],
    linkActiveClass: "active",
    mode: "history"
});

