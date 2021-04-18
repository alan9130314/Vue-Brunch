<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{'disabled': pages.current_page === 1}"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="emitPages(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="(item, index) in pages.total_pages"
          :key="index"
          class="page-item"
          :class="{'active': item === pages.current_page}"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="emitPages(item)"
          >{{ item }}</a>
        </li>
        <li
          class="page-item"
          :class="{'disabled': pages.current_page === pages.total_pages}"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"

            @click.prevent="emitPages(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    emitPages (item) {
      this.$emit('emitPages', item)
    }
  }
}
</script>

<style lang="scss">
  .page-item.active .page-link {
      z-index: 3;
      color: #fff;
      background-color: #000000d9;
      border-color: #000000d9;
  }
  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #000000d9;
    background-color: #fff;
    border: 1px solid #dee2e6;
}
</style>
