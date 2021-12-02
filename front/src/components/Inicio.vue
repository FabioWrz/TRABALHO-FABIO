<template>
<div >
  <v-carousel style="z-index:999">
    
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
   <span class="bg2"></span>
 <v-form >
    
    <v-container>
      <v-row>
        <v-col>
            <v-btn

            depressed 
            elevation="10"
            raised
            color="Orange"
            style="width: 200px; height: 200px; margin-left: 300px; margin-top: 80px"
             to="/FuncionariosCadastro"
          >Funcionarios</v-btn>
            
            <v-btn
            depressed
            elevation="10"
            raised
            style="width: 200px; height: 200px; margin-left: 200px; margin-top: 80px"
             to="/CadastroClientes"
          >Clientes</v-btn>

           <v-btn
            depressed
            elevation="10"
            raised
            style="width: 200px; height: 200px; margin-left: 300px; margin-top: 80px"
            to="/CadastroProdutos"
          >Produtos</v-btn>

            <v-btn
            depressed
            elevation="10"
            raised dense
            style="width: 200px; height: 200px; margin-left: 200px; margin-top: 80px;"
            to="/CadastroVendas"
          >Vendas</v-btn>
            

        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
</template>
<style>
.bg2 {
      width: 95%;
      height: 96%;
      position: absolute;
      top: 0;
      left: 0;
      background: url( 'https://site.bbel.com.br/wp-content/uploads/2016/10/6e0f8896-86e5-4b5d-b2b5-af0baa973650-1.jpg') no-repeat center center;
      background-size: cover;
      background-color: orange ;
      transform: scale(1.1);
   }
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://www.supermercadosminipreco.com.br/img/banner_ofertas.png',
          },
          {
            src: 'http://www.supermercadosminipreco.com.br/img/banner_ofertas2.png',
          },
        ],
      }
    },
  }
</script>
 