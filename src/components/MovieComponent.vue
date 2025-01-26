<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="movie">
      <v-img class="movie-img" :src="thumbnail" />

      <v-card-title class="truncate">
        {{ title }}
      </v-card-title>

      <v-card-subtitle>
        {{ year }}
      </v-card-subtitle>

      <v-card-text class="truncate">
        {{ description }}
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieComponent",
});
</script>

<script setup>

const props = defineProps({
  movieData: {
    type: Object,
    required: true,
  },
});

const { thumbnail, title, year, description } = props.movieData;
</script>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie {
  padding: 5px;
  width: 220px;
  cursor: pointer;
}

.movie-img {
  width: 220px;
  height: 320px;
}
</style>
