<template>
  <div id="app">
    <GradientBackground />
    <div class="app-container">
      <Header />
      <div class="content-container">
        <Sidebar />
        <main class="main-content">
          <router-view />
        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Sidebar from '@/components/common/Sidebar.vue'
import GradientBackground from '@/components/common/GradientBackground.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
    GradientBackground
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
}

.app-container {
  position: relative;
  z-index: 10;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.content-container {
  display: flex;
  margin-top: 20px;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 80vh;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
  }

  .main-content {
    margin-top: 20px;
  }
}
</style>
