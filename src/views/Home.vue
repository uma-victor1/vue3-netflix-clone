<template>
  <div class="home">
    <div class="mt-72 text-left px-8 text-white">
      <div class="fixed -top-50 -left-50 w-200 h-200 -z-10">
        <img
          draggable="false"
          class="absolute inset-0 m-auto min-w-50 min-h-50"
          src="https://wallpapercave.com/wp/wp6193606.jpg"
          alt="demon slayer"
        />
      </div>
      <h1 class="text-4xl mb-3 lg:mb-5 lg:text-7xl xl:text-9xl font-semibold">SPIDER-MAN</h1>
      <p class="lg:text-3xl mb-4 lg:mb-6">
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
</template>

<script>
export default {
  name: "Home",
};
</script>
