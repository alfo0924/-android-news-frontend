<template>
  <div class="news-detail-component">
    <div class="news-content" v-if="news">
      <div class="news-meta mb-3">
        <div class="source-info">
          <img
              :src="sourceLogoUrl"
              :alt="news.source"
              class="source-logo"
          >
          <span class="source-name">{{ news.source }}</span>
        </div>
        <div class="publish-info">
          <i class="bi bi-clock"></i>
          <span>{{ formatDateTime(news.publishDate) }}</span>
        </div>
      </div>

      <div class="news-tags mb-4">
        <span
            v-for="(tag, index) in news.tags"
            :key="index"
            class="news-tag"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="news-body" v-html="news.content"></div>

      <div class="news-footer mt-5">
        <div class="news-author" v-if="news.author">
          <div class="author-avatar">
            <img
                :src="news.authorAvatar || 'https://via.placeholder.com/50?text=A'"
                :alt="news.author"
            >
          </div>
          <div class="author-info">
            <h4>{{ news.author }}</h4>
            <p v-if="news.authorBio">{{ news.authorBio }}</p>
          </div>
        </div>

        <div class="share-buttons mt-4">
          <h5>分享這篇文章</h5>
          <div class="share-links">
            <a href="#" class="share-link facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="share-link twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="share-link linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="share-link email">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="placeholder-content">
      <div class="placeholder-text"></div>
      <div class="placeholder-text"></div>
      <div class="placeholder-text"></div>
    </div>
  </div>
</template>

<script>
import { formatDateTime } from '@/utils/dateFormatter'

export default {
  name: 'NewsDetail',
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  computed: {
    sourceLogoUrl() {
      // 這裡可以根據來源名稱返回對應的 logo URL
      const sourceLogos = {
        'Google': 'https://www.google.com/favicon.ico',
        'Android Authority': 'https://www.androidauthority.com/favicon.ico',
        'XDA Developers': 'https://www.xda-developers.com/favicon.ico',
        'Android Police': 'https://www.androidpolice.com/favicon.ico'
      }

      return sourceLogos[this.news.source] || 'https://via.placeholder.com/16?text=S'
    }
  },
  methods: {
    formatDateTime
  }
}
</script>

<style scoped>
.news-detail-component {
  font-size: 1.1rem;
  line-height: 1.8;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.source-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.source-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.source-name {
  font-weight: 500;
}

.publish-info {
  color: #6c757d;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.news-tag {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f8f9fa;
  border-radius: 20px;
  color: #495057;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.news-tag:hover {
  background-color: #e9ecef;
  cursor: pointer;
}

.news-body {
  margin-top: 20px;
}

.news-body img {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
}

.news-body p {
  margin-bottom: 20px;
}

.news-body h2, .news-body h3 {
  margin-top: 30px;
  margin-bottom: 15px;
}

.news-body blockquote {
  border-left: 4px solid #007bff;
  padding-left: 20px;
  color: #495057;
  font-style: italic;
  margin: 20px 0;
}

.news-author {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.author-avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.author-info p {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.share-buttons h5 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.share-links {
  display: flex;
  gap: 15px;
}

.share-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.share-link.facebook {
  background-color: #3b5998;
}

.share-link.twitter {
  background-color: #1da1f2;
}

.share-link.linkedin {
  background-color: #0077b5;
}

.share-link.email {
  background-color: #6c757d;
}

.share-link:hover {
  opacity: 0.9;
  transform: translateY(-3px);
}

.placeholder-content {
  padding: 20px;
}

.placeholder-text {
  height: 20px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

.placeholder-text:nth-child(1) {
  width: 100%;
}

.placeholder-text:nth-child(2) {
  width: 85%;
}

.placeholder-text:nth-child(3) {
  width: 75%;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
