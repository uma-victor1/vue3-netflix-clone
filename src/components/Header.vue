<template>
  <div>
    <nav class="hidden lg:block bg-gray-900">
      <ul class="flex space-x-8 items-center p-4">
        <li class="font-bold text-3xl text-red-600">VueFlix</li>
        <li v-for="link in navLinks" :key="link.name">
          <router-link
            :to="link.href"
            class="font-bold text-white hover:text-app-green-1 transition ease-in-out duration-300"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const navLinks = ref({
      Home: {
        name: "Home",
        href: "/"
      },
      TvShows: {
        name: "Tv Shows",
        href: "#"
      },
      Series: {
        name: "Series",
        href: "#"
      }
    });
    return { navLinks };
  }
};
</script>

<style scoped></style>
