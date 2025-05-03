<template>
  <div class="news-page">
    <div v-if="isLoading" class="text-center my-5">
      <LoadingSpinner />
    </div>

    <div v-else-if="currentNews" class="news-detail">
      <div class="news-header mb-4">
        <h1>{{ currentNews.title }}</h1>
        <div class="news-meta">
          <span class="source">{{ currentNews.source }}</span>
          <span class="date">{{ formatDateTime(currentNews.publishDate) }}</span>
          <span
              v-for="(tag, index) in currentNews.tags"
              :key="index"
              class="badge bg-secondary me-1"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="featured-image-container mb-4">
        <img
            :src="currentNews.imageUrl || 'https://via.placeholder.com/1200x600?text=Android+News'"
            class="img-fluid rounded"
            :alt="currentNews.title"
        >
        <small v-if="currentNews.imageCredit" class="image-credit">
          圖片來源: {{ currentNews.imageCredit }}
        </small>
      </div>

      <div class="news-content mb-5">
        <p class="summary lead">{{ currentNews.summary }}</p>
        <div v-html="currentNews.content"></div>
      </div>

      <div class="news-footer">
        <h3>相關新聞</h3>
        <div v-if="currentNews.relatedNews && currentNews.relatedNews.length > 0">
          <NewsList :news-items="currentNews.relatedNews" :compact="true" />
        </div>
        <div v-else class="text-muted">
          暫無相關新聞
        </div>

        <div class="mt-4">
          <router-link to="/" class="btn btn-outline-primary">
            <i class="bi bi-arrow-left"></i> 返回首頁
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-warning">
      找不到該新聞，可能已被刪除或移動。
      <router-link to="/" class="alert-link">返回首頁</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue'
import NewsList from '@/components/news/NewsList.vue'
import { formatDateTime } from '@/utils/dateFormatter'

export default {
  name: 'NewsPage',
  components: {
    LoadingSpinner,
    NewsList
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters('news', ['currentNews']),
    ...mapGetters(['isLoading'])
  },
  methods: {
    ...mapActions('news', ['fetchNewsById']),
    formatDateTime
  },
  created() {
    this.fetchNewsById(this.id)
  },
  watch: {
    id(newId) {
      this.fetchNewsById(newId)
    }
  },
  metaInfo() {
    return {
      title: this.currentNews ? this.currentNews.title : 'News Detail',
      meta: [
        { name: 'description', content: this.currentNews ? this.currentNews.summary : '' }
      ]
    }
  }
}
</script>

<style scoped>
.news-page {
  max-width: 900px;
  margin: 0 auto;
}

.news-header {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.news-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
  color: #6c757d;
  font-size: 0.9rem;
}

.featured-image-container {
  position: relative;
}

.image-credit {
  position: absolute;
  bottom: 5px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.news-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.summary {
  font-weight: 500;
  color: #495057;
  border-left: 4px solid #007bff;
  padding-left: 15px;
}

.news-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>
