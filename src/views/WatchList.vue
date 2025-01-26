<template>
  <v-container class="py-4">
    <v-btn color="primary" variant="outlined" class="mb-4" @click="router.push({ name: 'Catalog' })">
      Back to Catalog
    </v-btn>
    <div v-if="!store.watchList.length" class="text-center">
      <h1>Your watchlist is empty. Start adding movies to see them here!</h1>
    </div>
    <v-row v-else class="gap-4">
      <v-col cols="12" sm="3" v-for="item in store.watchList" :key="item.id">
        <WatchListItem :movie="item" @remove="removeFromList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import WatchListItem from "@/components/ListComponent.vue";

export default defineComponent({
  name: "WatchList",
  components: {
    WatchListItem,
  },
});
</script>

<script setup>
import { useDataStore } from "@/stores/dataStore";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useDataStore();

const removeFromList = (id) => {
  store.removeFromList(id);
};

</script>
<style scoped>
.text-center {
  text-align: center;
}

.v-container {
  margin: 0 auto;
  overflow: hidden;
}
</style>
