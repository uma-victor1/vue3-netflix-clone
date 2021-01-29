<template>
  <div>
    <div
      class="flex flex-col justify-center items-center max-w-sm mx-auto my-8"
    >
      <div
        style="
            background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80;
          "
        class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popularMovies: {
      type: Array,
      default:[] 
    },
  },
};
</script>
