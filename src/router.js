// import Vue from "vue";
// import Router from "vue-router";

// importa o que vou usar
import { createRouter, createWebHistory } from 'vue-router';

// importo todas as telas que vou usar no router
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import MeusFilmes from "./pages/MeusFilmes";
import Erro from "./pages/Erro";

// Crio uma const com array de objetos
const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
      path: '/filme/:id',
      name: "Filme",
      component: Filme,
      props: true,
  },
  {
      path: '/salvos',
      name:'MeusFilmes',
      component: MeusFilmes,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Erro',
    component: Erro,
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
