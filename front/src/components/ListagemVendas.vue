<template>
<div>
<h1>
<center> Lista de Vendas </center>
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
          { text: 'ID', value: 'ven_id_venda' },
          { text: 'Nome', value: 'ven_cliente' },
          { text: 'CPF', value: 'ven_datavenda' },
          { text: 'Cidade', value: 'ven_valor_total' },
          { text: 'Endereço', value: 'ven_funcionario' },
          { text: 'Endereço', value: 'ven_pagamento' },
        ],
        desserts: [],
      }
    },
    computed: {
        ...mapGetters("vendas", ["vendas"])
    },
    methods: {
        ...mapActions("vendas", ["getVendas"]),
    },
    mounted() {
      this.getVendas()
    }
  }
</script>