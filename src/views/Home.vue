<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">前台頁面</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/checkout">結帳頁面</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>
