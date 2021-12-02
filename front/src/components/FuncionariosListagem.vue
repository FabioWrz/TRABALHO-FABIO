<template>
<div>
<h1>
<center> Listagem de Funcionarios </center>
</h1>
   <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>

</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'ID', value: 'fun_id_funcionario' },
          { text: 'Nome', value: 'fun_nome' },
          { text: 'Cidade', value: 'fun_cidade ' },
          { text: 'Endereço', value: 'fun_endereco' },
          { text: 'CPF', value: 'fun_cpf ' },
        ],
        desserts: [],
      }
    },
    computed: {
        ...mapGetters("funcionarios", ["funcionarios"])
    },
    methods: {
        ...mapActions("funcionarios", ["getFuncionarios"]),
    },
    mounted() {
      this.getFuncionarios()
    }
  }
</script>