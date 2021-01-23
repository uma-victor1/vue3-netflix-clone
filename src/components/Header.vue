<template>
  <div>
    <nav class="hidden lg:block">
      <ul class="flex space-x-12 items-center">
        <!-- Change text colors once color theme is added -->
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="font-bold text-white hover:text-app-green-1 transition ease-in-out duration-300"
            >{{ link.name }}</a
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
      services: {
        name: "Services",
        href: "#services"
      },
      packages: {
        name: "Packages",
        href: "#packages"
      },
      works: {
        name: "Works",
        href: "#works"
      },
      contactus: {
        name: "Contact Us",
        href: "#contact"
      }
    });
    return { navLinks };
  }
};
</script>

<style scoped></style>
