import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import router from '@/router/routes'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'

const apolloClient = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
})

Vue.use(VueApollo)
    const apolloProvider = new VueApollo({
      defaultClient: apolloClient,
    })   
  

Vue.config.productionTip = false
new Vue({
  
  render: h => h(App),
  router,
  apolloProvider
}).$mount('#app')
