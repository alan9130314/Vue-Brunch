<template>
  <div id="Product">
    <Loading :active.sync="isLoading" />

    <div class="container">
      <div style="min-height: 400px;
      background-position: center center;background-repeat: no-repeat;background-size: cover;"
      :style="{ backgroundImage:   `url(${product.imageUrl[0]})`}">
      </div>
      <div class="row justify-content-between mt-4 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0">{{ product.title }}</h2>
          <p class="font-weight-bold">NT${{ product.origin_price }}</p>
          <p class="font-weight-bold">NT${{ product.price }}</p>
          <p>{{ product.description }}</p>
          <!-- <div class="my-4">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="img-fluid mt-4">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="img-fluid mt-4">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="img-fluid mt-4">
          </div> -->
          <!-- <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-minus"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1"
                :disabled="quantity === 1"
                @click="quantityUpdata(quantity - 1)">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" :value="quantity"
>
            <div class="input-group-append">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2"
                @click="quantityUpdata(quantity + 1)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <!-- <a href="./checkout.html" class="btn btn-dark btn-block rounded-0 py-3">加入購物車</a> -->
          <button class="btn btn-dark btn-block rounded-0 py-3"
          @click="addToCart">
          加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        imageUrl: []
      },
      isLoading: false,
      quantity: 1
    }
  },
  methods: {
    addToCart () {
      this.isLoading = true
      this.$http.post(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`, {
        product: this.product.id,
        quantity: this.quantity
      })
        .then(res => {
          console.log('加入購物車結果', res)
          this.$bus.$emit('get-cart')
          this.isLoading = false
        })
        .catch((error) => {
          const errorData = error.response.data.errors
          errorData.forEach((err) => {
            this.$bus.$emit('message:push',
              `建立訂單失敗惹，好糗Σ( ° △ °|||)︴
            ${err}`,
              'danger')
          })

          this.isLoading = false
        })
    },
    quantityUpdata (num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return
      this.quantity = num
    }
  },
  created () {
    console.log(this.$route.params.id)
    // 屬性 $route
    // 方法 $router
    const id = this.$route.params.id
    // const { id } = this.$route.params // 解構方式
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then(res => {
        console.log(res)
        this.product = res.data.data
      })
  }
}
</script>
<style lang="scss">
  #Product{
    height: 100vh;
  }
</style>
