<template>
  <div class="news-list">
    <div
      v-if="newsItems.length === 0"
      class="text-center my-5"
    >
      <p class="text-muted">
        沒有找到相關新聞
      </p>
    </div>

    <div v-else>
      <NewsCard
        v-for="news in newsItems"
        :key="news.id"
        :news="news"
        :compact="compact"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from './NewsCard.vue'

export default {
  name: 'NewsList',
  components: {
    NewsCard
  },
  props: {
    newsItems: {
      type: Array,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.news-list {
  margin-bottom: 30px;
}
</style>
