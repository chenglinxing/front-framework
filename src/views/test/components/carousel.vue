<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(${offset}px)` }">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <span class="text">{{ slide }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        '这是要轮播的文字1',
        '这是要轮播的文字2',
        '这是要轮播的文字3',
      ],
      offset: 0,
      currentIndex: 0,
      slideWidth: 200, // 轮播宽度
      autoplayInterval: 3000, // 自动播放间隔时间（毫秒）
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoplayInterval);
    },
    stopAutoplay() {
      clearInterval(this.autoplayTimer);
    },
    nextSlide() {
      this.currentIndex++;
      this.offset = -this.currentIndex * this.slideWidth;
      if (this.currentIndex === this.slides.length) {
        setTimeout(() => {
          this.offset = 0; // 无缝循环，回到第一张
          this.currentIndex = 0;
        }, 500); // 等待过渡动画结束再回到第一张
      }
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  width: 100%;
}

.text {
  padding: 0 10px;
  white-space: nowrap;
}
</style>
