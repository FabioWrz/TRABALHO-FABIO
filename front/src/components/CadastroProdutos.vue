<template>
<div>
<h1>
<center> Cadastro de Produtos </center>
</h1>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          
        >
          <v-text-field
            label="Código"
            placeholder="Código do produto"
            outlined
            v-model="produtos.pro_id_produto"
          ></v-text-field>

           <v-text-field
            label="Produto"
            placeholder="Nome do produto"
            outlined
            v-model="produtos.pro_nome"
          ></v-text-field>

           <v-text-field
            label="Estoque"
            placeholder="Quantidade estoque"
            outlined
            v-model="produtos.pro_estoque"
          ></v-text-field>

           <v-text-field
            label="Fornecedor"
            placeholder="Código do fornecedor"
            outlined
            v-model="produtos.pro_fornecedor"
          ></v-text-field>

          <v-text-field
            label="Marca"
            placeholder="Marca do produto"
            outlined
            v-model="produtos.pro_marca"
          ></v-text-field>

          <v-btn
            depressed
            elevation="5"
            color="success"
            raised
            class="mr-4" @click="setProdutos(produtos)"
          >Salvar</v-btn>

          <v-btn
            depressed
            elevation="5"
            color="secondary"
            raised
            class="mr-4"
          >Editar</v-btn>

           <v-btn
            depressed
            style="float:right"
            elevation="5"
            color="info"
            raised
            class="mr-4"
            to="/ListagemProdutos"
          >Listar</v-btn>

          <v-btn
            depressed
            elevation="5"
            raised
            color="error"
            class="mr-4"
          >Cancelar</v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default{
  data() {
  return {
    produtos:{
      pro_id_produto: null,
      pro_nome : null,
      pro_estoque: null,
      pro_fornecedor: null,
      pro_marca: null
    },
  }
  },
    methods: {
        ...mapActions("produtos", ["setProdutos"]),
    },
  }

</script>