<template>
  <div
    v-for="(movie, id) in popularMovies"
    :key="id"
    class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
  >
    <div
      :style="{
        backgroundImage: `url(${baseImgUrl}/w500${movie.backdrop_path})`,
      }"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
    ></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    popularMovies: {
      type: Array,
    },
  },
  setup() {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    return { baseImgUrl };
  },
};
</script>
