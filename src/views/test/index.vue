<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in items" :key="index">
        {{ item }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from "vue-awesome-swiper";

  export default {
    name: "testT",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        items: [
          "这是要轮播的文字1",
          "这是要轮播的文字2",
          "这是要轮播的文字3",
          "这是要轮播的文字1",
          "这是要轮播的文字2",
          "这是要轮播的文字3",
          "这是要轮播的文字1",
          "这是要轮播的文字2",
          "这是要轮播的文字3",
        ],
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
          },
        },
      };
    },
  };
</script>

<style scoped>
  .swiper-container {
    width: 200px; /* 轮播容器的宽度 */
  }
</style>
