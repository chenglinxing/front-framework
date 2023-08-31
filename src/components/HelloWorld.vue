<template>
  <div class="hello">
    <div class="container">vue2 + vue-router + vuex + axios + sass</div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello {
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      font-size: 16px;
      font-weight: bold;
    }
  }
</style>
