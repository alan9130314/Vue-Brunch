<template>
  <div class="checkout">
      <Loading :active.sync="isLoading" />
      <div class="bg-light pt-5 pb-7">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse text-left">
          <div class="col-md-6">
            <validation-observer
            v-slot="{ invalid }">
            <form @submit.prevent="createOrder">
              <div class="bg-white p-4">
                <h4 class="font-weight-bold">聯繫資料</h4>
                <p class="mt-4">訂購人資訊</p>
                  <div class="form-group mb-2">
                    <!-- input -->
                    <!-- rule 規則 -->
                    <!-- v-slot 回饋 -->
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                    <label for="username" class="text-muted mb-0">姓名</label>
                    <input type="text" class="form-control rounded-0" id="username" name="姓名"
                    v-model="form.name" placeholder="姓名"  :class="classes">
                    <span
                      v-if="errors[0]"
                      class="invalid-feedback"
                    >{{ errors[0] }}</span>
                    <!-- 回饋訊息 -->
                    </validation-provider>
                  </div>
                  <div class="form-group mb-0">
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                    <label for="email" class="text-muted mb-0" >信箱</label>
                    <input type="email" class="form-control rounded-0" id="email" name="信箱"
                    v-model="form.email" placeholder="example@gmail.com"  :class="classes">
                    <span
                      v-if="errors[0]"
                      class="text-danger"
                    >{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input rounded-0" id="ContactLorem">
                    <label class="form-check-label" for="ContactLorem">我想收到電子報</label>
                  </div>
                  <div class="form-group">
                    <validation-provider
                      rules="required|min:8"
                      v-slot="{ errors, classes }"
                    >
                    <label for="tel" class="text-muted">電話</label>
                    <input type="tel" class="form-control rounded-0"  id="tel"
                  v-model="form.tel" placeholder="0933-123-123" name="電話" :class="classes">
                    <span
                      v-if="errors[0]"
                      class="text-danger"
                    >{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
              </div>
              <div class="bg-white p-4 mt-3">
                <h4 class="font-weight-bold">宅配資料</h4>
                  <p class="mt-4 mb-3">訂購人地址</p>
                  <div class="form-group mb-2">
                    <validation-provider rules="required" v-slot="{ errors,classes}">
                    <label for="address" class="text-muted mb-0">住址</label>
                    <input type="text" class="form-control rounded-0 mt-1" id="address"
                    v-model="form.address" placeholder="住址" :class="classes" name="住址">
                    <span
                      v-if="errors[0]"
                      class="text-danger"
                    >{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors,classes}">
                    <label for="payment">付款方式</label>
                    <select
                      v-model="form.payment"
                      class="form-control"
                      required id="payment" :class="classes" name="付款方式"
                    >
                      <option
                        value=""
                        disabled
                      >
                        請選擇付款方式
                      </option>
                      <option value="WebATM">
                        WebATM
                      </option>
                      <option value="ATM">
                        ATM
                      </option>
                      <option value="CVS">
                        CVS
                      </option>
                      <option value="Barcode">
                        Barcode
                      </option>
                      <option value="Credit">
                        Credit
                      </option>
                      <option value="ApplePay">
                        ApplePay
                      </option>
                      <option value="GooglePay">
                        GooglePay
                      </option>
                    </select>
                    <span
                      v-if="errors[0]"
                      class="text-danger"
                    >{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <label for="coupon_code" class="text-muted ">優惠碼</label>
                  <span class="ml-3 font-weight-light" style='font-size:.8px'>請輸入 75%OFF 僅至2022/4/30止</span>
                  <div class="input-group mb-3 input-group">
                    <input name="coupon_code" id="coupon_code"
                      v-model="coupon_code"
                      type="text"
                      class="form-control"
                      placeholder="請輸入優惠碼"
                    >
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="addCoupon"
                      >
                        套用優惠碼
                      </button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">備註</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      class="form-control"
                      cols="30"
                      rows="3"
                    />
                  </div>
              </div>
            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <!-- <a href="./product.html" class="btn btn-light text-dark mt-md-0 mt-3 py-3 px-7 rounded-0"><i class="fas fa-chevron-left mr-2"></i>上一步</a> -->
              <router-link class="btn btn-light text-dark mt-md-0 mt-3 py-3 px-7 rounded-0" :to="{ name: 'products'}"><i class="fas fa-chevron-left mr-2"></i>上一步</router-link>
                <!-- <a href="./checkout-success.html" class="btn btn-dark py-3 px-7 rounded-0">下一步<i class="fas fa-chevron-right ml-2"></i></a> -->
              <!-- <router-link class="btn btn-dark py-3 px-7 rounded-0" :to="{ name: '結帳完成'}">下一步<i class="fas fa-chevron-right ml-2"></i></router-link> -->
              <button
              type="submit"
              class="btn btn-dark py-3 px-7 rounded-0"
              :disabled="invalid">
              結帳<i class="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
            </form>
            </validation-observer>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="mb-4">訂單內容</h4>
              <div class="d-flex mb-1" v-for="item in cart" :key="item.id">
              <div style="width:50px;height:50px;margin-right:5px">
                <img :src="item.product.imageUrl[0]" alt="" class="mr-2 product_img">
              </div>
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="mb-0">x{{ item.quantity }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0" style="font-size:.8px"><del>NT${{ item.product.origin_price }}</del><small></small></p>
                    <p class="mb-0">NT${{ item.product.price }}</p>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小記</th>
                    <td class="text-right border-0 px-0 pt-4">NT${{ subTotal }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                    <td class="text-right border-0 px-0 pt-0">{{ form.payment }}</td>
                  </tr>
                  <tr  v-if="coupon.enabled">
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">折扣金額</th>
                    <td class="text-right border-0 px-0 pt-0"> {{ discountGold }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold" >NT${{ cartTotal }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="goCheckOut()">確認進行結帳</button> -->
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      cart: {},
      subTotal: 0,
      cartTotal: 0,
      coupons: {},
      coupon: {},
      discountGold: 0,
      // coupon 不建議預先定義，如果預先定義的話通常是空值
      // 如果傳送一個空值的 coupon 就會出現 500 錯誤
      // 因此會建議打完 coupon API 確定該 coupon 是存在並啟用的狀態在加入到訂單內
      isLoading: false,
      coupon_code: '',
      uuid: process.env.VUE_APP_UUID,
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      }
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
          this.subTotal += item.product.price * item.quantity
          this.cartTotal += item.product.price * item.quantity
        })

        this.isLoading = false
      })
    },
    goCheckOut () {
      this.$router.push('/checkout_complete')
    },
    // 新增 coupon (實際是搜尋 coupon)
    addCoupon () {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/coupon/search`
      // 輸入 coupon 之前必須先戳一下 api/{{ uuid }}/coupon/search API 確定該 coupon 是存在的
      this.$http.post(url, { code: this.coupon_code }).then((response) => {
        // 若 coupon 存在就回寫回去到 this.coupon
        // 該資料會是一個物件格式，詳情可見 API 文件
        // https://course-ec-api.hexschool.io/document#frontend-search-coupon-code-code
        this.coupon = response.data.data
        this.discountGold = this.cartTotal - Math.round(this.cartTotal * (this.coupon.percent / 100))
        this.cartTotal = Math.round(this.cartTotal * (this.coupon.percent / 100))

        this.isLoading = false
      }).catch((error) => {
        const errorData = error.response.data.errors

        if (errorData) {
          errorData.code.forEach((err) => {
            this.$bus.$emit('message:push',
              `加入失敗
            ${err}`,
              'danger')
          })

          this.isLoading = false
        } else {
          const { message } = error.response.data

          this.$bus.$emit('message:push',
            `加入失敗
            ${message}`,
            'danger')

          this.isLoading = false
        }
      })
    },
    createOrder () {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders`
      const order = { ...this.form }

      // 如果有優惠卷就加入，請注意該 coupon 必須先執行過 this.addCoupon()
      // 主要會使用 enabled 屬性判斷該 coupon 是否可以使用
      // 如果沒有執行 this.addCoupon() 那麼 enabled 就會是 undefined，因此還是不會執行
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      }

      console.log(order)
      this.$http.post(url, order).then((response) => {
        if (response.data.data.id) {
          this.getCart()
          console.log(response.data.data.id)
          this.$router.push(`/checkout_complete/${response.data.data.id}`)
          this.$bus.$emit('get-cart')
        }

        this.isLoading = false
      }).catch((error) => {
        const errorData = error.response.data.errors

        errorData.forEach((err) => {
          this.$bus.$emit('message:push',
            `建立訂單失敗
          ${err}`,
            'danger')
        })

        this.isLoading = false
      })
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
