<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    methods: {},
    created() {
      let currentTheme = localStorage.getItem("theme") || "default";
      document.documentElement.setAttribute("class", currentTheme);
    },
  };
</script>
<style></style>
