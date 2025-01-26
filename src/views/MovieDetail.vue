<template>

  <v-btn @click="router.push({ name: 'Catalog' })" color="primary" variant="elevated">
    Back to catalog
  </v-btn>

  <div class="movie">
    <div class="movie-img">
      <img :src="selectedMovie.thumbnail" alt="">
    </div>
    <div>
      <p>Title: {{ selectedMovie.title }}</p>
      <p>Description: {{ selectedMovie.extract }}</p>
      <p>Cast: {{ selectedMovie.cast?.toString() }}</p>
      <p>Year: {{ selectedMovie.year }}</p>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="addToList">Add to Watchlist</v-btn>
    </div>
    <v-dialog v-model="showDialog" max-width="400px">
      <v-card>
        <v-card-title>Added to WatchList</v-card-title>
        <v-card-text><b>{{ selectedMovie.title }}</b> added to your watchlist</v-card-text>
        <v-card-actions>
          <v-btn color="error" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'MovieDetail'
})
</script>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useDataStore } from "@/stores/dataStore";
import { useRoute, useRouter } from "vue-router";

const dataStore = useDataStore();
const router = useRouter();
const route = useRoute();

const showDialog = ref(false);

onMounted(async () => {
  if (!dataStore.data.length) {
    await dataStore.fetchData();
  }
});

const selectedMovie = computed(() => {
  return dataStore.data.find((item) => item.id === route.params.id) || {};
})

const addToList = () => {
  const added = dataStore.addToList(selectedMovie);
  showDialog.value = !!added;
}

const closeDialog = () => {
  showDialog.value = false;
};

</script>

<style scoped>
.movie {
  display: flex;
  margin-top: 50px;
}

.movie-img {
  margin-right: 24px;
}
</style>
