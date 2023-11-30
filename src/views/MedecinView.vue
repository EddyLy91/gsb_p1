<template>
    <div>
      <NavbarComponent />
  
      <div>
      </div>
  
      <RechercheMedecinComponent />
      <ListeRapportsComponent />
      <FicheMedecinComponent />
    </div>
  </template>
  
  <script>
  import NavbarComponent from '../components/NavbarComponent.vue';
  import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';
  import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';
  import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';

  export default {
    components: {
      NavbarComponent,
      RechercheMedecinComponent,
      ListeRapportsComponent,
      FicheMedecinComponent,
    },
  };
  </script>