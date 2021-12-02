<template>
  <v-app>
    
    <v-app-bar app
    style="z-index:999"
      img src="http://2.bp.blogspot.com/-cd9vp7lGaBw/UA8hyKx6qfI/AAAAAAAAAqE/xfnPaYVVpG4/s1600/7-banner-verduras+novo+pequeno.jpg"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> 
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app style="background: #D2691E">
      
      <div @click="goTo({component:'Inicio'})" ><h1 class="logo">SuperTOP</h1 ></div>
      
      <v-divider style="margin-top: 25px"></v-divider>
      <v-list
        dense nav
      />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item)"
        >
          <v-list-item-icon>
            <v-icon style="color: white;">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  style="color: white;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong  class="subheading">SuperTOP 2021 © Todos os direitos reservados.</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          :href= "icon.link"
          
        >
          <v-icon size="30px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      
    </v-card>
  </v-footer>
  </v-app>
  
</template>




<script>
export default {
  name: 'App',

  data() {
    return {
      items: [
        { title: "Inicio", icon: "mdi-view-dashboard", component:'Inicio'},
        { title: "Funcionarios", icon: "mdi-account", component: 'FuncionariosCadastro'},
        { title: "Clientes", icon: "mdi-account-check", component: 'CadastroClientes' },
        { title: "Produtos", icon: "mdi-package-variant", component: 'CadastroProdutos' },
        { title: "Vendas", icon: "mdi-cart", component: 'CadastroVendas' },
      ],
      right: null,
      drawer: false,
      icons: [
        {icon: 'mdi-facebook', link: 'https://www.facebook.com/fabio.wrzesinski.52'},
        {icon: 'mdi-instagram', link: 'https://www.instagram.com/fabioowrzesinski/'},
      ],
    };
  },

  methods: {
    goTo(item) {
      this.$router.push({ name: item.component })
    }
  }
  
};


</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Oxygen:wght@300&family=Rubik:wght@300&display=swap');

.logo {
  margin-top: 38px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
}
</style>