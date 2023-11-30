<template>
 <v-sheet class="bg-gradient pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="login"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          type = "password"
          placeholder="Entre le mot de passe fdp " 
        ></v-text-field>

        <br />

        <v-btn
          @click = "getLogin"
          :loading="loading"
          block
          color="#5cf5b5"
          size="large"
          variant="elevated"
        >
          Connexion
        </v-btn>
      </v-form>

      <div v-if="errorMessage" class="error-message mt-4">
        <v-alert type="error" outlined icon="mdi-alert-circle-outline" class="error-box">
          {{ errorMessage }}
        </v-alert>
      </div>

      <div v-if="successMessage" class="success-message mt-4">
        <v-alert type="success" outlined icon="mdi-check-circle-outline" class="success-box">
          {{ successMessage }}
        </v-alert>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import DataService from '@/services/DataService'
var dataService = new DataService(); // Instanciation de l'objet de type DataService

export default {
  data: () => ({
    form: false,
    login : null,
    password : null,
    loading: false,
    errorMessage: null,
    successMessage: null,
  }),

  methods: {
    getLogin(){
      //console.log(this.login)
      //appel au dataService pour interroger l'API
      dataService.getVisiteur(this.login,this.password)
      //Si succès, on stocke les données de l'utilisateur
      //dans le store, puis on redirige vers la page d'accueil
      .then(
        (data)=>{
          //Enregistrement dans le store, dans la varaible utilisateur
          this.$store.state.utilisateur = data;
          console.log(data);
          this.successMessage = 'Connexion réussie !';
          this.errorMessage = null;
          this.$router.push('/accueil');
      })
      //sinon, on affiche la banière d'erreur
      .catch(
        ()=>{
          //this.isVisible=true
          this.errorMessage = 'Authentification incorrect';
          this.successMessage = null;
      })
    }
  }
};
</script>

<style scoped>
.bg-gradient {
 background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,98,80,1) 35%, rgba(0,212,255,1) 100%);
}
</style>