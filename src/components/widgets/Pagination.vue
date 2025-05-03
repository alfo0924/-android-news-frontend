<template>
  <nav
    v-if="totalPages > 1"
    aria-label="Page navigation"
  >
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        :class="{ disabled: currentPage === 1 }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="changePage(currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="page in visiblePages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(page)"
        >
          {{ page }}
        </a>
      </li>

      <li
        class="page-item"
        :class="{ disabled: currentPage === totalPages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="changePage(currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    maxVisiblePages: {
      type: Number,
      default: 5
    }
  },
  computed: {
    visiblePages() {
      if (this.totalPages <= this.maxVisiblePages) {
        // 如果總頁數小於等於最大可見頁數，則顯示所有頁碼
        return Array.from({ length: this.totalPages }, (_, i) => i + 1)
      }

      // 計算要顯示的頁碼範圍
      let startPage = Math.max(1, this.currentPage - Math.floor(this.maxVisiblePages / 2))
      let endPage = startPage + this.maxVisiblePages - 1

      // 如果結束頁碼超過總頁數，則調整
      if (endPage > this.totalPages) {
        endPage = this.totalPages
        startPage = Math.max(1, endPage - this.maxVisiblePages + 1)
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    }
  },
  methods: {
    changePage(page) {
      if (page < 1 || page > this.totalPages || page === this.currentPage) {
        return
      }
      this.$emit('page-changed', page)
    }
  }
}
</script>

<style scoped>
.pagination {
  margin-top: 30px;
  margin-bottom: 10px;
}

.page-link {
  color: #007bff;
  border: none;
  padding: 8px 16px;
  transition: all 0.2s ease;
}

.page-item.active .page-link {
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}

.page-item:not(.active) .page-link:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
