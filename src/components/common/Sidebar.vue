<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <div class="popular-section">
        <h3 class="sidebar-title">
          熱門話題
        </h3>
        <ul class="popular-tags">
          <li
            v-for="(tag, index) in popularTags"
            :key="index"
          >
            <a
              href="#"
              @click.prevent="searchTag(tag)"
            >
              #{{ tag }}
            </a>
          </li>
        </ul>
      </div>

      <div class="categories-section">
        <h3 class="sidebar-title">
          分類瀏覽
        </h3>
        <ul class="category-list">
          <li
            v-for="category in displayCategories"
            :key="category.id"
          >
            <router-link :to="{ name: 'category', params: { category: category.slug }}">
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="subscribe-section">
        <h3 class="sidebar-title">
          訂閱最新消息
        </h3>
        <p>獲取 Android 生態系統的最新動態</p>
        <form @submit.prevent="subscribe">
          <div class="input-group mb-3">
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="您的電子郵件"
              required
            >
            <button
              class="btn btn-primary"
              type="submit"
            >
              訂閱
            </button>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      email: '',
      popularTags: [
        'Android13', 'Pixel', 'GoogleIO', 'Samsung', 'MIUI',
        'AndroidDev', 'AppDevelopment', 'MaterialDesign'
      ],
      // 預設分類，實際應該從 API 獲取
      defaultCategories: [
        { id: 1, name: '手機', slug: 'phones' },
        { id: 2, name: '平板', slug: 'tablets' },
        { id: 3, name: '穿戴裝置', slug: 'wearables' },
        { id: 4, name: '應用程式', slug: 'apps' },
        { id: 5, name: '作業系統', slug: 'os' },
        { id: 6, name: '開發', slug: 'development' },
        { id: 7, name: 'Google', slug: 'google' },
        { id: 8, name: '硬體', slug: 'hardware' }
      ]
    }
  },
  computed: {
    ...mapGetters('news', ['categories']),
    displayCategories() {
      // 如果從 API 獲取的分類為空，則使用預設分類
      return this.categories.length > 0 ? this.categories : this.defaultCategories
    }
  },
  methods: {
    searchTag(tag) {
      this.$router.push({
        path: '/search',
        query: { q: tag }
      })
    },
    subscribe() {
      // 這裡應該實現訂閱邏輯，例如發送 API 請求
      alert(`感謝您的訂閱！我們會將最新消息發送至 ${this.email}`)
      this.email = ''
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  margin-right: 20px;
}

.sidebar-content {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.popular-tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}

.popular-tags li a {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f8f9fa;
  border-radius: 20px;
  color: #495057;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.popular-tags li a:hover {
  background-color: #007bff;
  color: white;
}

.category-list {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.category-list li {
  margin-bottom: 10px;
}

.category-list li a {
  display: block;
  padding: 8px 15px;
  border-radius: 5px;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s ease;
}

.category-list li a:hover, .category-list li a.router-link-active {
  background-color: rgba(0, 123, 255, 0.1);
  color: #007bff;
}

.subscribe-section {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}

.subscribe-section p {
  font-size: 0.9rem;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
