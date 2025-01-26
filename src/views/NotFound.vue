<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/">Go back to the catalog</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('404 - Page Not Found');
  },
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>
