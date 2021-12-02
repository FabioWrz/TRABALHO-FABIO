<template>
<div>
<h1>
<center> Cadastro de Clientes </center>
</h1>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          
        >
          <v-text-field
            label="Código"
            placeholder="Digite seu código"
            outlined
            v-model="clientes.cli_id_cliente"
          ></v-text-field>

           <v-text-field
            label="Nome"
            placeholder="Digite seu nome"
            outlined
            v-model="clientes.cli_nome"
          ></v-text-field>

           <v-text-field
            label="Cidade"
            placeholder="Digite sua cidade"
            outlined
            v-model="clientes.cli_cidade"
          ></v-text-field>

           <v-text-field
            label="Endereço"
            placeholder="Digite seu endereço"
            outlined
            v-model="clientes.cli_endereco"
          ></v-text-field>

          <v-text-field
            label="CPF"
            placeholder="Digite seu CPF"
            outlined
            v-model="clientes.cli_cpf_cnpj"
          ></v-text-field>

          <v-btn
            depressed
            elevation="5"
            color="success"
            raised
            class="mr-4" @click="setClientes(clientes)"
          >Salvar</v-btn>

          <v-btn
            depressed
            elevation="5"
            color="secondary"
            raised
            class="mr-4"
          >Editar</v-btn>

           <v-btn
            style="float:right"
            depressed
            elevation="5"
            raised
            color="info"
            class="mr-4"
            to="/ListagemClientes"
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
    clientes:{
      cli_id_cliente: null,
      cli_nome: null,
      cli_cpf_cnpj: null,
      cli_cidade: null,
      cli_endereco: null
    },
  }
  },
    methods: {
        ...mapActions("clientes", ["setClientes"]),
    },
  }

</script>
