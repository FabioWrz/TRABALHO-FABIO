<template>
   <v-app id="inspire">
      <span class="bglogin"></span>
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-15">
                     <v-toolbar dense color="primary" dark>
                        <v-toolbar-title>Login</v-toolbar-title>
                        <!-- <v-spacer></v-spacer>
                        <v-switch v-model="$vuetify.theme.dark" inset label="dark"></v-switch> -->
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field prepend-icon="mdi-shield-account" name="login" label="Login" type="text">
                           </v-text-field>
                           <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password" type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn color="primary" to="/main">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>
   export default {
      name: 'Login'
   };
</script>

<style>
   .bglogin {
      width: 100%;
      height: 95.2%;
      position: absolute;
      top: 0;
      left: 0;
      background: url( 'https://mcdn.wallpapersafari.com/medium/78/42/3Pgc8M.png') no-repeat center center;;
      background-size: cover;
      transform: scale(1.1);
   }
</style>
