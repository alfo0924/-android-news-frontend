<template>
  <div class="category-page">
    <h1 class="mb-4">
      {{ categoryTitle }}
    </h1>

    <div
      v-if="isLoading"
      class="text-center my-5"
    >
      <LoadingSpinner />
    </div>

    <div v-else>
      <NewsFilter @filter-changed="applyFilter" />

      <div
        v-if="categoryNews && categoryNews.length > 0"
        class="mt-4"
      >
        <NewsList :news-items="categoryNews" />

        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="changePage"
        />
      </div>

      <div
        v-else
        class="alert alert-info mt-4"
      >
        此分類目前沒有新聞。請稍後再查看或嘗試其他分類。
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsList from '@/components/news/NewsList.vue'
import NewsFilter from '@/components/news/NewsFilter.vue'
import LoadingSpinner from '@/components/widgets/LoadingSpinner.vue'
import Pagination from '@/components/widgets/Pagination.vue'

export default {
  name: 'CategoryPage',
  components: {
    NewsList,
    NewsFilter,
    LoadingSpinner,
    Pagination
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      filterOptions: {
        sortBy: 'newest'
      }
    }
  },
  computed: {
    ...mapGetters('news', ['newsByCategory', 'totalPages', 'currentPage']),
    ...mapGetters(['isLoading']),
    categoryNews() {
      return this.newsByCategory[this.category] || []
    },
    categoryTitle() {
      const categoryMap = {
        'phones': '手機',
        'tablets': '平板',
        'wearables': '穿戴裝置',
        'apps': '應用程式',
        'os': '作業系統',
        'development': '開發',
        'google': 'Google',
        'hardware': '硬體'
      }
      return categoryMap[this.category] || this.category
    }
  },
  methods: {
    ...mapActions('news', ['fetchNewsByCategory']),
    changePage(page) {
      this.fetchNewsByCategory({
        category: this.category,
        page
      })
      // 滾動到頁面頂部
      window.scrollTo(0, 0)
    },
    applyFilter(filterOptions) {
      this.filterOptions = filterOptions
      // 這裡可以根據過濾選項調整 API 請求
      this.fetchNewsByCategory({
        category: this.category,
        page: 1
      })
    }
  },
  watch: {
    category(newCategory) {
      this.fetchNewsByCategory({ category: newCategory })
    }
  },
  created() {
    this.fetchNewsByCategory({ category: this.category })
  }
}
</script>

<style scoped>
.category-page {
  padding: 20px 0;
}
</style>
