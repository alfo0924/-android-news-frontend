<template>
  <div class="news-filter">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">篩選選項</h5>

        <div class="row g-3">
          <div class="col-md-4">
            <label for="sortBy" class="form-label">排序方式</label>
            <select
                id="sortBy"
                class="form-select"
                v-model="filterOptions.sortBy"
                @change="applyFilter"
            >
              <option value="newest">最新發布</option>
              <option value="oldest">最早發布</option>
              <option value="popular">熱門程度</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="timeRange" class="form-label">時間範圍</label>
            <select
                id="timeRange"
                class="form-select"
                v-model="filterOptions.timeRange"
                @change="applyFilter"
            >
              <option value="all">全部時間</option>
              <option value="today">今天</option>
              <option value="week">本週</option>
              <option value="month">本月</option>
              <option value="year">今年</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="source" class="form-label">來源</label>
            <select
                id="source"
                class="form-select"
                v-model="filterOptions.source"
                @change="applyFilter"
            >
              <option value="all">全部來源</option>
              <option v-for="source in sources" :key="source" :value="source">
                {{ source }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-3">
          <div class="form-check form-check-inline" v-for="tag in popularTags" :key="tag">
            <input
                class="form-check-input"
                type="checkbox"
                :id="'tag-' + tag"
                :value="tag"
                v-model="filterOptions.tags"
                @change="applyFilter"
            >
            <label class="form-check-label" :for="'tag-' + tag">{{ tag }}</label>
          </div>
        </div>

        <div class="d-flex justify-content-end mt-3">
          <button class="btn btn-sm btn-outline-secondary me-2" @click="resetFilter">
            重置
          </button>
          <button class="btn btn-sm btn-primary" @click="applyFilter">
            套用篩選
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsFilter',
  data() {
    return {
      filterOptions: {
        sortBy: 'newest',
        timeRange: 'all',
        source: 'all',
        tags: []
      },
      sources: [
        'Google',
        'Android Authority',
        'XDA Developers',
        'Android Police',
        'Android Central',
        'TechCrunch'
      ],
      popularTags: [
        'Android 13',
        'Pixel',
        'Samsung',
        '應用程式',
        '更新'
      ]
    }
  },
  methods: {
    applyFilter() {
      this.$emit('filter-changed', { ...this.filterOptions })
    },
    resetFilter() {
      this.filterOptions = {
        sortBy: 'newest',
        timeRange: 'all',
        source: 'all',
        tags: []
      }
      this.applyFilter()
    }
  }
}
</script>

<style scoped>
.news-filter {
  margin-bottom: 20px;
}

.news-filter .card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-check-inline {
  margin-right: 15px;
}

.form-check-label {
  font-size: 0.9rem;
}
</style>
