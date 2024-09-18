<template>
    <div>
      <h2>Mostrar la ruta óptima</h2>
      <ul>
        <li v-for="punto in ruta" :key="punto">{{ punto }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        ruta: []
      };
    },
    mounted() {
      this.obtenerRuta();
    },
    methods: {
      async obtenerRuta() {
        try {
          const respuesta = await axios.get('http://localhost:3000/api/rutas/optima');
          this.ruta = respuesta.data.ruta;
        } catch (error) {
          console.error('Error al obtener la ruta:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #2c3e50;
  }
  </style>
  