<template>
    <v-container>
        <!--
            Ici a chaque pression du clavier , l'action getLesMedecins va se déclencher
            pour mettre à jour la liste en fonction de la saisie
        -->
        <v-text-field @keyup="getLesMedecins" label="Nom de medecin" v-model="nomMedecin">
        </v-text-field>

        <!--
            Ensuite nous créon la v-card qui va afficher la liste des medecins trouvés.
            Elle sera affichée que pendant une recherche (attribut isListVisible)
            Chaque permettera de selectionner les informations du medecin choisi

        -->

        <v-card class="mx-auto">
            <v-list v-show="isListVisible">
            <v-list-item v-for="item in items" :key="item.id" :value="item.nom" 
            @click="getInfos(item)">
                {{ item.nom + " " + item.prenom}}
                </v-list-item>
            
            </v-list>
        </v-card>



    </v-container>
</template>

<script>
export default {
    name: 'RechercheMedecinComponent',
    data(){
        return{
            idMedecin: '',
            nomMedecin: '',
            items:[],
            isListVisible: false,
        }
    },

    methods:{
        getLesMedecins(){
            console.log(this.nomMedecin);
            this.$store.state.dataService.getLesMedecins(this.nomMedecin)
                .then(
                    (data) => {
                        console.log(data);
                        this.items = data;
                        this.isListVisible = true
                    })

                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },

        getInfos(item){
            console.log(item);
            this.isListVisible = false;
            this.selectMedecin = item;
            this.nomMedecin = item.nom + " " + item.prenom + ": " + item.id;
            this.$parent.isNavMedVisible = true;
        }
    }
}
</script>