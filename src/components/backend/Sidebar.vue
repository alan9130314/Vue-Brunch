<template>
<div id="backEnd_navbar" class="bg-light">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a @click.prevent=""
        class="navbar-brand"
        href="#"
      >後台管理系統</a>
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
              :to="{ name: 'Home'}"
            >
              前台
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'admin-products'}"
            >
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'admin-coupons'}"
            >
              優惠卷列表
            </router-link>
          </li><li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'admin-storages'}"
            >
              圖片頁面
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'admin-orders'}"
            >
              訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'admin-customer_order'}"
            >
              模擬下單系統
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="signOut"
            >
              登出
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
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
      document.cookie = 'hexToken=;expires=;'
      // console.log('token 已清除')
      // this.$cookies.remove('hexToken')

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

<style lang="scss">
  ul.navbar-nav {
    background-color: unset;
}
</style>
