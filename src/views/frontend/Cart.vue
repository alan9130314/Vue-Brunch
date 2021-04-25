<template>
  <div class="cart">
      <Loading :active.sync="isLoading" />

      <div class="bg-light pt-5 pb-7">
          <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);">
          <div class="d-flex justify-content-between">
            <h2 class="mt-2">購物車</h2>
          </div>

          <div class="d-flex mt-4 bg-light" v-for="item in cart" :key="item.id">
            <div style="width: 120px; height: 120px;">
            <img :src="item.product.imageUrl[0]" alt="" style="width: 120px; height: 100%; object-fit: cover;">
            </div>
            <div class="w-100 p-3 position-relative">
              <a href="#" class="position-absolute" style="top: 16px; right: 16px;"
              @click="removeCartItem(item.product.id)">
                <i class="fas fa-times"></i>
              </a>
              <p class="mb-0 font-weight-bold">{{ item.product.title }}</p>
              <p class="mb-1 text-muted" style="font-size: 14px;">{{ item.product.category }}</p>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="input-group w-50 align-items-center bg-transparent">
                  <div class="input-group-prepend pr-1">
                    <a href="#"  :disabled="item.quantity === 1"
                      @click.prevent="quantityUpdata(item.product.id, item.quantity - 1)">
                      <i class="fas fa-minus"></i></a>
                  </div>
                  <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                  :value="item.quantity"
                  @keyup.enter="quantityUpdata(item.product.id, $event.target.value)">
                  <div class="input-group-append pl-1">
                    <a href="#"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)">
                    <i class="fas fa-plus"></i></a>
                  </div>
                </div>
                <p class="mb-0 ml-auto">NT${{ item.product.price }}</p>
              </div>
            </div>
          </div>

          <table class="table mt-4 text-muted">
            <tbody>
              <!-- <tr>
                <th scope="row" class="border-0 px-0 font-weight-normal">小計</th>
                <td class="text-right border-0 px-0">NT${{ cartTotal }}</td>
              </tr> -->
              <!-- <tr>
                <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">運費</th>
                <td class="text-right border-0 px-0 pt-0">NT$500</td>
              </tr> -->
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">總計</p>
            <p class="mb-0 h4 font-weight-bold">NT${{ cartTotal }}</p>
          </div>
          <a href="#" @click.prevent="goCheckOut()" class="btn btn-dark btn-block mt-4 rounded-0 py-3">結帳</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cart: {},
      cartTotal: 0,
      coupon: {},
      isLoading: false,
      coupon_code: '',
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.cartTotal = 0
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/shopping`

      this.$http.get(url).then((response) => {
        this.cart = response.data.data

        this.cart.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity
        })

        this.isLoading = false
      })
    },
    quantityUpdata (id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return

      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/shopping`

      const data = {
        product: id,
        quantity: num
      }

      this.$http.patch(url, data).then(() => {
        this.isLoading = false

        this.getCart()
      })
    },
    removeCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/shopping/${id}`

      this.$http.delete(url).then(() => {
        this.$bus.$emit('message:push',
          '刪除成功',
          'success')

        this.isLoading = false
        this.getCart()
        this.$bus.$emit('get-cart')
      })
    },
    goCheckOut () {
      this.$router.push('/checkout')
    }
  }
}
</script>

<style lang="scss">
  .product_img{
    height: 50px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
</style>
