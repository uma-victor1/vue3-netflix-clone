<template>
  <div class="home absolute inset-0 -z-10">
    <div
      style="
        background-image: url('https://wallpapercave.com/wp/wp6193606.jpg');
         background-position: center;
          background-repeat: no-repeat;
           background-size: cover;
            background-attachment: fixed;
      "
      class="hero text-left px-8 text-white h-screen relative"
    >
      <div class="absolute mt-72">
        <h1 class="text-4xl mb-3 lg:mb-5 lg:text-7xl xl:text-9xl font-semibold">
          SPIDER-MAN
        </h1>
        <p class="lg:text-2xl mb-4 lg:mb-6">
          With great power comes great responsibility
        </p>
        <div>
          <button
            class="bg-white rounded-lg font-bold text-gray-800 text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-300 mr-6"
          >
            Play
          </button>
          <button
            class="bg-gray-400 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 mr-6"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
    <!-- most popular -->
    <Movie />
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
export default {
  name: "Home",
  components: {
    Movie
  }
};
</script>
