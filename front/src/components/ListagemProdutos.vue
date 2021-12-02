<template>
<div>
<h1>
<center> Lista de Produtos </center>
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
          { text: 'ID', value: 'pro_id_produto' },
          { text: 'Nome', value: 'pro_nome' },
          { text: 'Estoque', value: 'pro_estoque' },
          { text: 'Fornecedor', value: 'pro_fornecedor' },
          { text: 'Marca', value: 'pro_marca' },
        ],
        desserts: [],
      }
    },
    computed: {
        ...mapGetters("produtos", ["produtos"])
    },
    methods: {
        ...mapActions("produtos", ["getProdutos"]),
    },
    mounted() {
      this.getProdutos()
    }
  }
</script>