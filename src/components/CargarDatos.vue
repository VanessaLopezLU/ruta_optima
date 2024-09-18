<template>
    <div class="container">
      <h2>Cargar datos de prueba</h2>
      <div class="file-upload">
        <label class="custom-file-upload">
          <input type="file" @change="onFileChange" />
          Seleccionar archivo
        </label>
        <span v-if="archivo">{{ archivo.name }}</span>
      </div>
      <button class="upload-button" @click="subirDatos">Subir Datos</button>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        archivo: null
      };
    },
    methods: {
      onFileChange(event) {
        this.archivo = event.target.files[0];
      },
      async subirDatos() {
        if (!this.archivo) {
          alert('Selecciona un archivo');
          return;
        }
  
        const lector = new FileReader();
        lector.onload = async (e) => {
          const contenido = JSON.parse(e.target.result);
          try {
            const respuesta = await axios.post('http://localhost:3000/api/rutas/cargar', contenido);
            console.log(respuesta.data);
          } catch (error) {
            console.error('Error al cargar los datos:', error);
          }
        };
        lector.readAsText(this.archivo);
      }
    }
  };
  </script>
  
  
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

h2 {
  color: #34495e;
  margin-bottom: 20px;
}

.file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  border: 1px solid #2980b9;
  transition: background-color 0.3s;
}

.custom-file-upload:hover {
  background-color: #2980b9;
}

span {
  margin-left: 10px;
  font-size: 14px;
  color: #2c3e50;
}

.upload-button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.upload-button:hover {
  background-color: #27ae60;
}

.upload-button:focus {
  outline: none;
}

input[type="file"] {
  display: none;
}
</style>

  