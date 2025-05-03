<template>
  <div class="home">
    <h1 class="mb-4">Android 最新資訊</h1>

    <div v-if="isLoading" class="text-center my-5">
      <LoadingSpinner />
    </div>

    <div v-else>
      <div class="featured-news mb-5" v-if="featuredNews">
        <div class="card featured-card">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                  :src="featuredNews.imageUrl || 'https://via.placeholder.com/600x400?text=Android+News'"
                  class="img-fluid rounded-start featured-image"
                  :alt="featuredNews.title"
              >
            </div>
            <div class="col-md-6">
              <div class="card-body d-flex flex-column h-100">
                <div>
                  <span class="badge bg-primary mb-2">熱門</span>
                  <h2 class="card-title">{{ featuredNews.title }}</h2>
                  <p class="card-text">{{ featuredNews.summary }}</p>
                </div>
                <div class="mt-auto">
                  <p class="card-text">
                    <small class="text-muted">{{ formatRelativeTime(featuredNews.publishDate) }}</small>
                    <span class="ms-2 badge bg-secondary">{{ featuredNews.source }}</span>
                  </p>
                  <router-link
                      :to="{ name: 'news-detail', params: { id: featuredNews.id }}"
                      class="btn btn-primary"
                  >
                    閱讀全文
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mb-3">最新新聞</h2>
      <NewsList :news-items="latestNews" />

      <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="changePage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsList from '@/components/news/NewsList.vue'
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue'
import Pagination from '@/components/widgets/Pagination.vue'
import { formatRelativeTime } from '@/utils/dateFormatter'

export default {
  name: 'Home',
  components: {
    NewsList,
    LoadingSpinner,
    Pagination
  },
  computed: {
    ...mapGetters('news', ['latestNews', 'totalPages', 'currentPage']),
    ...mapGetters(['isLoading']),
    featuredNews() {
      return this.latestNews.length > 0 ? this.latestNews[0] : null
    }
  },
  methods: {
    ...mapActions('news', ['fetchLatestNews']),
    formatRelativeTime,
    changePage(page) {
      this.fetchLatestNews(page)
      // 滾動到頁面頂部
      window.scrollTo(0, 0)
    }
  },
  created() {
    this.fetchLatestNews()
  }
}
</script>

<style scoped>
.home {
  padding: 20px 0;
}

.featured-card {
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-5px);
}

.featured-image {
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .featured-image {
    height: 200px;
  }
}
</style>
