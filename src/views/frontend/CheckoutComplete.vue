<template>
  <div class="CheckoutComplete">
      <div class="container">
      <div style="min-height: 400px; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;">
      </div>
      <div class="mt-5 mb-7">
        <div class="row">
          <div class="col-md-6">
            <h2>結帳完成</h2>
            <p>感謝您的消費，訂單預計會在3天內受理，若有任何問題請洽詢客服人員</p>
            <a href="#"  @click.prevent="goPage()" class="btn btn-outline-dark mr-2 rounded-0 mb-4">繼續購物</a>
          </div>
          <div class="col-md-6">
            <div class="card rounded-0 py-4">
              <div class="card-header border-bottom-0 bg-white px-4 py-0">
                <h2>訂單內容</h2>
              </div>
              <div class="card-body px-4 py-0">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0"
                    v-for="(item, key) in order.products" :key="key">
                    <div class="d-flex mt-2">
                      <img :src=item.product.imageUrl[0] alt="" class="mr-2" style="width: 60px; height: 60px; object-fit: cover">
                      <div class="w-100 d-flex flex-column">
                        <div class="d-flex justify-content-between font-weight-bold">
                          <h5>{{ item.product.title }}</h5>
                          <p class="mb-0">x{{ item.quantity }}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-auto">
                          <p class="text-muted mb-0"><small>NT${{ item.product.origin_price}}</small></p>
                          <p class="mb-0">NT${{ item.product.price}}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item px-0 pb-0">
                    <table class="table text-muted">
                      <tbody>
                        <tr>
                          <th scope="row" class="border-0 px-0 font-weight-normal">小計</th>
                          <td class="text-right border-0 px-0">NT${{ subTotal }}</td>
                        </tr>
                        <tr>
                          <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">折扣金額</th>
                          <td class="text-right border-0 px-0 pt-0 ">NT${{ subTotal -  order.amount | round }}</td>
                        </tr>
                        <tr>
                          <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                          <td class="text-right border-0 px-0 pt-0">ApplePay</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="d-flex justify-content-between mt-2">
                      <p class="mb-0 h4 font-weight-bold">訂單金額</p>
                      <p class="mb-0 h4 font-weight-bold">NT${{ order.amount | round}}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutComplete',
  data () {
    return {
      order: {
        user: {}
      },
      orders: [],
      orderId: '',
      uuid: process.env.VUE_APP_UUID,
      isLoading: false,
      subTotal: 0
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.$route.params)

    if (this.orderId) {
      this.getDetailed(this.orderId)
    }
  },
  methods: {
    getDetailed (id) {
      this.isLoading = true
      this.orderId = id

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders/${id}`

      this.$http.get(url).then((response) => {
        this.order = response.data.data
        // console.log(this.order)
        this.isLoading = false
        this.order.products.forEach((item) => {
          this.subTotal += item.product.price * item.quantity
          // this.cartTotal += item.product.price * item.quantity
        })
      })
    },
    payOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders/${this.orderId}/paying`

      this.$http.post(url).then((response) => {
        if (response.data.data.paid) {
          this.getDetailed(this.orderId)
        }
        this.isLoading = false
      })
    },
    goPage () {
      // console.log(this.$router)
      this.$router.push('/products')
    }
  }
}
</script>
