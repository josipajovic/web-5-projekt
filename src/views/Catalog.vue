<template>
  <div class="movie-list">
    <v-text-field v-model="searchQuery" label="Search Movies" outlined class="mb-4"></v-text-field>
    <v-row no-gutters :gap="4">
      <v-col v-for="movie in filteredMovies" :key="movie.id" cols="12" sm="3" @click="goToMoviePage(movie.id)">
        <movie-component :movie-data="movie" @item-clicked="goToMoviePage" />
      </v-col>
    </v-row>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import MovieComponent from "@/components/MovieComponent.vue";

export default defineComponent({
  name: 'CatalogView',
  components: {
    MovieComponent
  }
})
</script>
<script setup>
import { onMounted, ref, computed } from "vue";
import { useDataStore } from "@/stores/dataStore";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const dataStore = useDataStore()
const router = useRouter()

const goToMoviePage = (id) => {
  router.push({ name: 'MovieDetail', params: { id } })
}

onMounted(async () => {
  await dataStore.fetchData();

});

const filteredMovies = computed(() =>
  dataStore.data.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>
