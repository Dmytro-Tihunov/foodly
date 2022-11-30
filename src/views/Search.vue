<script setup>
import { RouterLink } from "vue-router";
import { useAppStore } from "@/store";
const useStore = useAppStore();

</script>

<template>
<h1>Поиск</h1>

  <div v-if="useStore.isLoading">Loading...</div>

  <div v-else v-for="item in useStore.data">
   <img style="width:40px" :src="item.image"/>
    <p>{{item.name}}</p>
    <router-link
        :to="`/product/${item.barcode}`"
    >Подробнее</router-link>
  </div>



</template>


