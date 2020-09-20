<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a @click.prevent=""
      class="navbar-brand"
      href="#"
    >Vue Frontend</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: '後台'}"
          >
            後台
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: '前台產品頁面'}"
          >
            產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: '關於我們'}"
          >
            關於我們
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: '結帳'}"
          >
            結帳
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  methods: {
    signOut () {
      this.$cookies.remove('token')

      this.$bus.$emit('message:push',
        '登出成功',
        'success')

      this.$router.push('/login')
    },
    goPage () {
      this.$router.push('/')
    }
  }
}
</script>
