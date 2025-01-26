<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();


const toolbarTitle = computed(() => {
  return route.name === "WatchList" ? "My watchlist" : "Movies";
});
</script>

<template>
  <v-toolbar :title="toolbarTitle">
    <v-btn @click="router.push({ name: 'WatchList' })" color="primary" variant="elevated">My Watchlist</v-btn>
  </v-toolbar>

  <v-container class="mt-4">
    <RouterView />
  </v-container>
</template>
