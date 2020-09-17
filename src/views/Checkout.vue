<template>
  <div class="checkout">
    <h1>This is 結帳頁面</h1>
    <button @click="goCheckOut()">確認進行結帳</button>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
    }
  },
  methods: {
    goCheckOut () {
      console.log('結帳完成頁面')
      this.$router.push('/checkout_complete')
    }
  }
}
</script>
