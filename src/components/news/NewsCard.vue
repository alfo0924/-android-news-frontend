<template>
  <div class="news-card" :class="{ 'compact': compact }">
    <div class="card h-100">
      <div class="row g-0">
        <div :class="imageColumnClass">
          <img
              :src="news.imageUrl || 'https://via.placeholder.com/300x200?text=Android+News'"
              class="img-fluid rounded-start news-image"
              :alt="news.title"
          >
        </div>
        <div :class="contentColumnClass">
          <div class="card-body d-flex flex-column h-100">
            <div>
              <div class="card-category mb-2">
                <span class="badge bg-secondary">{{ news.category }}</span>
                <span class="source-name">{{ news.source }}</span>
              </div>
              <h3 class="card-title">{{ news.title }}</h3>
              <p class="card-text" v-if="!compact">{{ news.summary }}</p>
            </div>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <small class="text-muted">{{ formatRelativeTime(news.publishDate) }}</small>
              <router-link
                  :to="{ name: 'news-detail', params: { id: news.id }}"
                  class="btn btn-sm btn-outline-primary"
              >
                閱讀更多
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatRelativeTime } from '@/utils/dateFormatter'

export default {
  name: 'NewsCard',
  props: {
    news: {
      type: Object,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageColumnClass() {
      return this.compact ? 'col-4' : 'col-md-4'
    },
    contentColumnClass() {
      return this.compact ? 'col-8' : 'col-md-8'
    }
  },
  methods: {
    formatRelativeTime
  }
}
</script>

<style scoped>
.news-card {
  margin-bottom: 20px;
}

.news-card .card {
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.news-image {
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.card-category {
  display: flex;
  align-items: center;
  gap: 10px;
}

.source-name {
  font-size: 0.8rem;
  color: #6c757d;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text {
  color: #6c757d;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.compact .card-title {
  font-size: 1rem;
  -webkit-line-clamp: 2;
}

@media (max-width: 768px) {
  .news-image {
    height: 180px;
    width: 100%;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
  }

  .news-card:not(.compact) .row {
    flex-direction: column;
  }

  .news-card:not(.compact) .col-md-4 {
    width: 100%;
  }

  .news-card:not(.compact) .col-md-8 {
    width: 100%;
  }
}
</style>
