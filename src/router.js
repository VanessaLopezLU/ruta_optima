import { createRouter, createWebHistory } from 'vue-router';
import CargarDatos from './components/CargarDatos.vue';
import MostrarRuta from './components/MostrarRuta.vue';
import RegisterUsuario from './components/RegisterUsuario.vue';
import InicioSesion from './components/InicioSesion.vue';
import ConfirmarCuenta from './components/ConfirmarCuenta.vue';




const routes = [
  {
    path: '/',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/registrarse',
    name: 'RegisterUsuario',
    component: RegisterUsuario
  },
  {
    path: '/confirmar/:token',
    name: 'ConfirmaCuenta',
    component: ConfirmarCuenta,

  },

  {
    path: '/cargar-datos',
    name: 'CargarDatos',
    component: CargarDatos
  },
  {
    path: '/mostrar-ruta',
    name: 'MostrarRuta',
    component: MostrarRuta
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
