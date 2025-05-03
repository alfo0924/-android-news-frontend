<template>
  <div class="loading-spinner">
    <div class="spinner-container">
      <div
        class="spinner-border text-primary"
        role="status"
      >
        <span class="visually-hidden">載入中...</span>
      </div>
      <p
        v-if="showText"
        class="loading-text mt-2"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    showText: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '載入中，請稍候...'
    }
  }
}
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.spinner-container {
  text-align: center;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.loading-text {
  color: #6c757d;
  font-size: 0.9rem;
}
</style>
