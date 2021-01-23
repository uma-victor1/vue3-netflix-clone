<template>
  <div class="">
    <Header />
    <div class="fixed -top-50 -left-50 w-200 h-200 -z-10">
      <img
        draggable="false"
        class="absolute inset-0 m-auto min-w-50 min-h-50"
        src="https://wallpapercave.com/wp/wp6193606.jpg"
        alt="demon slayer"
      />
    </div>
  </div>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
