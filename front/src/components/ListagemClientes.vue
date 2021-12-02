<template>
<div>
<h1>
<center> Lista de Clientes </center>
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
      :items="cliente"
      :search="search"
    >
      <template v-slot:item.actions="{item}">
       <v-icon
       medium
       color="error"
       @click="deleteClientes(item)">
       mdi-delete
       </v-icon>
    
        
        
      </template>    
    </v-data-table>
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
          { text: 'ID', value: 'cli_id_cliente' },
          { text: 'Nome', value: 'cli_nome' },
          { text: 'CPF', value: 'cli_cpf_cnpj' },
          { text: 'Cidade', value: 'cli_cidade' },
          { text: 'Endereço', value: 'cli_endereco' },
          { text: '',value:"actions", sortable:false}
        ],
        desserts: [],
      }
    },
    computed: {
        ...mapGetters("clientes", ["cliente"])
    },
    methods: {
        ...mapActions("clientes", ["getClientes", "deleteClientes"]),
    },
    mounted() {
      this.getClientes()
    }
  }
</script>