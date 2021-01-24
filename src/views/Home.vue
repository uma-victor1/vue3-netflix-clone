<template>
  <div class="home absolute inset-0 -z-10">
    <div
      style="background-image: url('https://wallpapercave.com/wp/wp6193606.jpg');"
      class="text-left px-8 text-white h-screen relative"
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
    <div>
      <div
        class="flex flex-col justify-center items-center max-w-sm mx-auto my-8"
      >
        <div
          style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
