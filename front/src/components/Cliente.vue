<template>
<div>

<v-btn to="/inicio">voltar</v-btn>
<v-btn @click="getClientes()">Carregar Dados</v-btn>
{{cliente}}
 </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters("clientes", ["cliente"])
    },
    methods: {
        ...mapActions("clientes", ["getClientes"]),
    }
}
</script>

<style>

</style>