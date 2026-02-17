import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';


// ___________________pages_________________________
import Products from './components/production/Production.vue';
import Evaluate from "./components/Rightbottom/evaluate/Evaluate.vue";
import UserCredentail from './components/Rightbottom/userCredentail/UserCredentail.vue';

const app =createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
            {path: '/products', component: Products},
            {path: '/evaluate', component:Evaluate },
            {path: '/usercredentail', component:UserCredentail },
          ]
    })
app.use(router);    
app.mount('#app')
