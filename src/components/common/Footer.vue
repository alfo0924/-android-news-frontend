<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="row">
        <div class="col-md-4">
          <h3 class="footer-title">
            Android News Hub
          </h3>
          <p>
            您的 Android 生態系統最新資訊來源，提供最新、最全面的 Android 相關新聞。
          </p>
          <div class="social-links">
            <a
              href="#"
              class="social-link"
            >
              <i class="bi bi-facebook" />
            </a>
            <a
              href="#"
              class="social-link"
            >
              <i class="bi bi-twitter" />
            </a>
            <a
              href="#"
              class="social-link"
            >
              <i class="bi bi-instagram" />
            </a>
            <a
              href="#"
              class="social-link"
            >
              <i class="bi bi-github" />
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <h3 class="footer-title">
            快速連結
          </h3>
          <ul class="footer-links">
            <li>
              <router-link to="/">
                首頁
              </router-link>
            </li>
            <li>
              <router-link to="/category/phones">
                手機
              </router-link>
            </li>
            <li>
              <router-link to="/category/apps">
                應用程式
              </router-link>
            </li>
            <li>
              <router-link to="/category/os">
                作業系統
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                關於我們
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-4">
          <h3 class="footer-title">
            聯絡我們
          </h3>
          <ul class="contact-info">
            <li>
              <i class="bi bi-envelope" />
              <a href="mailto:contact@androidnewshub.com">contact@androidnewshub.com</a>
            </li>
            <li>
              <i class="bi bi-geo-alt" />
              <span>台北市信義區信義路五段7號</span>
            </li>
            <li>
              <i class="bi bi-telephone" />
              <span>+886 2 1234 5678</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Android News Hub. 保留所有權利。</p>
        <div class="footer-bottom-links">
          <a href="#">隱私政策</a>
          <a href="#">使用條款</a>
          <a href="#">Cookie 政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.site-footer {
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-content {
  padding: 30px;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #495057;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #007bff;
  color: white;
}

.footer-links, .contact-info {
  list-style: none;
  padding: 0;
}

.footer-links li, .contact-info li {
  margin-bottom: 10px;
}

.footer-links a, .contact-info a {
  color: #495057;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover, .contact-info a:hover {
  color: #007bff;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info i {
  font-size: 1.1rem;
  color: #007bff;
}

.footer-bottom {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-bottom p {
  margin-bottom: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-links a {
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
  }

  .col-md-4 {
    margin-bottom: 30px;
  }
}
</style>
