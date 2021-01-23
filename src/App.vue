<template>
  <div class="relative">
    <Header />
    <img
      class="absolute inset-0 h-screen w-screen bg-center bg-no-repeat bg-cover"
      src="https://wallpapercave.com/wp/wp6193606.jpg"
      alt="demon slayer"
    />
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
