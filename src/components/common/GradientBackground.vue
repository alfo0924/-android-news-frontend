<template>
  <div class="gradient-background" ref="background">
    <div class="gradient-overlay" :style="gradientStyle"></div>
  </div>
</template>

<script>
import { calculateGradient } from '@/utils/gradientUtils'

export default {
  name: 'GradientBackground',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      windowWidth: 0,
      windowHeight: 0,
      gradientStyle: {
        background: 'linear-gradient(135deg, #667eea, #764ba2)'
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY

      // 使用節流函數減少更新頻率，提高性能
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateGradient()
          this.ticking = false
        })
        this.ticking = true
      }
    },
    updateGradient() {
      this.gradientStyle.background = calculateGradient(
          this.mouseX,
          this.mouseY,
          this.windowWidth,
          this.windowHeight
      )
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
      this.updateGradient()
    }
  },
  mounted() {
    this.ticking = false
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    // 初始化漸層
    this.updateGradient()

    // 添加事件監聽器
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.handleResize)

    // 對於移動設備，使用設備方向事件
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        // 將設備傾斜轉換為虛擬滑鼠位置
        const tiltX = e.beta || 0  // -180 到 180 範圍
        const tiltY = e.gamma || 0 // -90 到 90 範圍

        // 將傾斜角度映射到屏幕座標
        this.mouseX = (tiltY + 90) / 180 * this.windowWidth
        this.mouseY = (tiltX + 180) / 360 * this.windowHeight

        this.updateGradient()
      })
    }
  },
  beforeDestroy() {
    // 移除事件監聽器
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.handleResize)
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleDeviceOrientation)
    }
  }
}
</script>

<style scoped>
.gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  transition: background 0.8s ease;
}
</style>
