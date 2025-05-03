<template>
  <div class="about-page">
    <h1 class="mb-4">
      關於 Android 新聞中心
    </h1>

    <div class="card mb-4">
      <div class="card-body">
        <h2 class="card-title">
          我們的使命
        </h2>
        <p class="card-text">
          Android 新聞中心致力於為您提供最新、最全面的 Android 生態系統相關新聞。我們的目標是成為您獲取 Android 資訊的首選平台，無論是最新的手機發布、系統更新、應用程式動態，還是開發者資訊。
        </p>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">
              資訊來源
            </h2>
            <p class="card-text">
              我們的新聞來自多個可靠的科技媒體和官方渠道，包括但不限於：
            </p>
            <ul>
              <li>Android 官方部落格</li>
              <li>Google 開發者平台</li>
              <li>知名科技媒體</li>
              <li>製造商官方公告</li>
              <li>開發者社群</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">
              更新頻率
            </h2>
            <p class="card-text">
              我們的系統每小時自動爬取最新的 Android 相關新聞，確保您能夠第一時間獲取最新資訊。重大新聞發布時，我們會立即更新。
            </p>
            <p class="card-text">
              您可以訂閱我們的電子報，獲取每日或每週的新聞摘要。
            </p>
            <button class="btn btn-primary">
              訂閱電子報
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h2 class="card-title">
          聯絡我們
        </h2>
        <p class="card-text">
          如果您有任何問題、建議或合作提案，請隨時與我們聯絡：
        </p>
        <ul>
          <li><strong>電子郵件：</strong> contact@androidnewshub.com</li>
          <li><strong>Twitter：</strong> @AndroidNewsHub</li>
          <li><strong>Facebook：</strong> /AndroidNewsHub</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2 class="card-title">
          技術實現
        </h2>
        <p class="card-text">
          本網站採用現代化的技術棧構建：
        </p>
        <ul>
          <li><strong>前端：</strong> Vue.js + Bootstrap 5</li>
          <li><strong>後端：</strong> Spring Boot</li>
          <li><strong>爬蟲技術：</strong> Java 爬蟲框架</li>
          <li><strong>部署：</strong> 雲端服務</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.card {
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
