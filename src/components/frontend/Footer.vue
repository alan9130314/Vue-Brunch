<template>
    <div id="Footer" class="">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white py-4">
          <p class="mb-0">© 2021 LOGO All Rights Reserved.</p>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="https://www.facebook.com/profile.php?id=100019021220266" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <!-- <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li> -->
            <li><a href="https://line.me/ti/p/vAWbzUsuWP" target="_blank" class="text-white ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       carts: []
//     }
//   },
//   methods: {
//     getCart () {
//       this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`)
//         .then(res => {
//           console.log('購物車內容:', res)
//           this.carts = res.data.data
//         })
//     }
//   },
//   created () {
//     this.getCart()
//     this.$bus.$on('get-cart', () => {
//       this.getCart()
//     })
//   }
// }
</script>
<style lang="scss">
  #Footer{
    background-color: rgba(0, 0, 0, 0.85);
  }
  .input-group{
    background-color: #fff;
  }
</style>
