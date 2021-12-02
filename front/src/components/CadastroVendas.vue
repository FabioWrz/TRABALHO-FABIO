<template>
<div>
<h1>
<center> Vendas </center>
</h1>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          
        >
          <v-text-field
            label="Código"
            placeholder="Código da venda"
            outlined
            
          ></v-text-field>

           <v-text-field
            label="Código"
            placeholder="Código do cliente"
            outlined
          ></v-text-field>

          <v-text-field
            label="Pagamento"
            placeholder="Opção de pagamento"
            outlined
            
          ></v-text-field>
          <v-text-field
            label="Funcionário"
            placeholder="Código do funcionário"
            outlined
            
          ></v-text-field>

          <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Data da venda"
            prepend-icon="mdi-calendar"
            readonly
            outlined
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

            <v-text-field
          label="Valor"
          prefix="R$"
          outlined
        ></v-text-field>

          <v-btn
            depressed
            elevation="5"
            color="success"
            raised
            class="mr-4"
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
            class="mr-4" @click="setVendas(vendas)"
            to="/ListagemVendas"
            
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
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
    }),
  } 

</script>