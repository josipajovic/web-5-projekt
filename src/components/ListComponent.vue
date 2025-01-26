<template>
  <v-card class="movie">
    <v-img class="movie-img" @click="goToMoviePage(movie.id)" :src="movie.thumbnail" alt="Movie Thumbnail" />
    <v-card-title class="truncate">{{ movie.title }}</v-card-title>
    <v-card-actions>
      <v-btn color="error" variant="text" @click="confirmRemoval">
        Remove
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="showDialog" max-width="400px">
      <v-card>
        <v-card-title>Confirm Removal</v-card-title>
        <v-card-text>Are you sure you want to remove <b>{{ movie.title }}</b> from your watchlist?</v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="cancelRemoval">Cancel</v-btn>
          <v-btn color="error" text @click="emitRemoval">Yes, Remove</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["remove"]);

const showDialog = ref(false);

const confirmRemoval = () => {
  showDialog.value = true;
};

const cancelRemoval = () => {
  showDialog.value = false;
};

const emitRemoval = () => {
  showDialog.value = false;
  emit("remove", props.movie.id);
};
const goToMoviePage = (id) => {
  router.push({ name: 'MovieDetail', params: { id } })
}
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
