<template>
  <v-form>
 <template>
  <v-card
    class="pa-12"
    color="indigo darken-2"
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer
        v-model="drawer"
        floating
        permanent
      >
        <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>

  <div id="rectangle"></div>
</template>

  </v-form>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Inicio', icon: 'mdi-view-dashboard' },
          { title: 'Sair', icon: 'mdi-forum' },
        ],
        drawer: false,
      }
    },
  }
</script>

<style>

#rectangle{
    width:1000px;
    height:1000px;
    background:green;
    margin-left: auto;
    margin-right: auto;
    width: 6em
}


</style>