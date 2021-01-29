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
    <div class="w-full bg-grey">
      <h3 class="text-white text-2xl pt-6 ml-4 text-left">Most Popular</h3>
      <div class="flex space-x-4 overflow-y-hidden overflow-x-scroll">
        <PopularMovies :moviesData="moviesData" />
      </div>
      <h3 class="text-white text-2xl pt-6 ml-4 text-left">Trending</h3>
      <div class="flex space-x-4 overflow-y-hidden overflow-x-scroll">
        <TrendingMovies :moviesData="moviesData" />
      </div>
      <h3 class="text-white text-2xl pt-6 ml-4 text-left">Top Rated</h3>
      <div class="flex space-x-4 overflow-y-hidden overflow-x-scroll">
        <TopRated :moviesData="moviesData" />
      </div>
    </div>
  </div>
</template>
s
<script>
import PopularMovies from "@/components/PopularMovies.vue";
import TrendingMovies from "@/components/TrendingMovies.vue";
import TopRated from "@/components/TopRated.vue";

export default {
  name: "Home",
  components: {
    PopularMovies,
    TrendingMovies,
    TopRated
  }
};
</script>
