<template>
  <div class="about">
    <h1>This is 產品列表頁面</h1>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>
          <!-- 動態路由 -->
          <router-link :to="`/product/${item.id}`">看產品細節</router-link>
          <!-- $router方式進入產品細節頁面 -->
          <button @click="goPage(item)">進入頁面</button>
          <a href="#" @click.prevent="goPage(item)">連結</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    goPage (item) {
      console.log(this.$router)
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_UUID)
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then((res) => {
        console.log(res)
        this.products = res.data.data
      })
  },
  mounted () {
    console.log($('button'))
  }
}
</script>
