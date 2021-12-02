<template>
<div>
<h1>
<center> Cadastro de Funcionarios </center>
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
            v-model="funcionarios.fun_id_funcionario"
          ></v-text-field>

           <v-text-field
            label="Nome"
            placeholder="Digite seu nome"
            outlined
            v-model="funcionarios.fun_nome"
          ></v-text-field>

           <v-text-field
            label="Cidade"
            placeholder="Digite sua cidade"
            outlined
            v-model="funcionarios.fun_cidade"
          ></v-text-field>

           <v-text-field
            label="Endereço"
            placeholder="Digite seu endereço"
            outlined
            v-model="funcionarios.fun_endereco"
          ></v-text-field>

          <v-text-field
            label="CPF"
            placeholder="Digite seu CPF"
            outlined
            v-model="funcionarios.fun_cpf"
          ></v-text-field>

          <v-btn
            depressed
            elevation="5"
            raised
            color="success"
            class="mr-4" @click="setFuncionarios(funcionarios)"
          >Salvar</v-btn>

          <v-btn
            depressed
            elevation="5"
            raised
            color="secondary"
            class="mr-4"
          >Editar</v-btn>

           <v-btn
            style="float:right"
            depressed
            elevation="5"
            raised
            color="info"
            class="mr-4"
            to="/FuncionariosListagem"
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
    funcionarios:{
      fun_id_funcionario: null,
      fun_nome : null,
      fun_cpf: null,
      fun_cidade: null,
      fun_endereco: null
    },
  }
  },
    methods: {
        ...mapActions("funcionarios", ["setFuncionarios"]),
    },
  }

</script>