<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          to="/"
        >
          <img
            v-if="false"
            src="@/assets/images/logo.png"
            alt="Android News Hub"
            height="40"
          >
          <span class="logo-text">Android News Hub</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div
          id="navbarContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
                exact
              >
                首頁
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                分類
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li
                  v-for="category in categories"
                  :key="category.id"
                >
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'category', params: { category: category.slug }}"
                  >
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
              >
                關於我們
              </router-link>
            </li>
          </ul>

          <form
            class="d-flex"
            @submit.prevent="search"
          >
            <input
              v-model="searchQuery"
              class="form-control me-2"
              type="search"
              placeholder="搜尋 Android 新聞..."
              aria-label="Search"
            >
            <button
              class="btn btn-outline-primary"
              type="submit"
            >
              搜尋
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
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
    ...mapActions('news', ['fetchCategories']),
    search() {
      if (this.searchQuery.trim()) {
        this.$router.push({
          path: '/search',
          query: { q: this.searchQuery.trim() }
        })
        this.searchQuery = ''
      }
    }
  },
  created() {
    // 獲取分類數據
    this.fetchCategories()
  },
  mounted() {
    // 初始化 Bootstrap 下拉菜單
    if (typeof bootstrap !== 'undefined') {
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
      dropdownElementList.forEach(dropdownToggleEl => {
        new bootstrap.Dropdown(dropdownToggleEl)
      })
    }
  }
}
</script>

<style scoped>
.site-header {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.navbar {
  padding: 15px;
}

.logo-text {
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-link {
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  background-color: rgba(0, 123, 255, 0.1);
}

.dropdown-menu {
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.dropdown-item {
  padding: 8px 20px;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.form-control {
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  padding-left: 15px;
}

.btn-outline-primary {
  border-radius: 20px;
  padding: 6px 20px;
}
</style>
