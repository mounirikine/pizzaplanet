import { createRouter , createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";



const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
   
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router