<template>
  <div class="about">
    <Loading :active.sync="isLoading" />
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="d-flex mb-3">
        <button class="btn btn-outline-dark mr-3 filter" data-filter="" @click="getProducts(1, '')">
          全部({{ this.totalProducts }})
        </button>
        <button class="btn btn-outline-dark mr-3 filter" data-filter="麵包/點心" @click="getProducts(1, '麵包/點心')">
          麵包/點心({{ this.totalBreadProducts }})
        </button>
        <button class="btn btn-outline-dark mr-3 filter" data-filter="咖啡" @click="getProducts(1, '咖啡')">
          咖啡({{ this.totalCoffeeProducts }})
        </button>
        <button class="btn btn-outline-dark mr-3 filter" data-filter="茶" @click="getProducts(1, '茶')">
          茶({{ this.totalTeaProducts }})
        </button>
        <button class="btn btn-outline-dark mr-3 filter" data-filter="茶那堤" @click="getProducts(1, '茶那堤')">
          茶那堤({{ this.totalCTProducts }})
        </button>
        <button class="btn btn-outline-dark mr-3 filter" data-filter="特調" @click="getProducts(1, '特調')">
          特調({{ this.totalSPProducts }})
        </button>
      </div>
      <div class="row">
        <div class="col-md-3"  v-for="item in products" :key="item.id">
          <div class="card mb-4 position-relative position-relative">
            <div class="card-mash">
              <img :src=item.imageUrl[0] class="card-img-top rounded" alt="...">
            </div>
            <a href="#" @click.prevent="" class="text-dark">
              <div class="position-absolute" style="right: 16px; top: 16px">
                <span class="badge badge-light float-right ml-2" :data-filter="item.category" @click="getProducts(1,  item.category )">{{ item.category }}</span>
              </div>
            </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><router-link :to="`/product/${item.id}`" >{{ item.title }}</router-link></h4>
              <!-- <p v-html="item.content" class="card-text text-muted mb-0"></p> -->
              <del class="text-muted mt-3">NT$ {{ item.origin_price}}</del>
              <p class="text-muted mt-3 h4 font-weight-bold">NT$ {{ item.price}}</p>
              <button
              type="button"
              class="btn btn-outline-danger btn-sm w-100"
              :disabled="status.loadingItem === item.id"
              @click="addtoCart(item)"
              >
              <i
                v-if="status.loadingItem === item.id"
                class="spinner-grow spinner-grow-sm"
              />
              加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center">
        <Pagination v-if="!filterFlag"
        :pages="pagination"
        @emitPages="getProducts"
        />
        <!-- <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul> -->
      </nav>
    </div>

    <!-- <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td> -->
          <!-- 動態路由 -->
          <!-- <router-link :to="`/product/${item.id}`">看產品細節</router-link> -->
          <!-- $router方式進入產品細節頁面 -->
          <!-- <button @click="goPage(item)">進入頁面</button>
          <a href="#" @click.prevent="goPage(item)">連結</a>
          <router-link :to="`/product/${item.id}`" >連結</router-link>
        </td>
      </tr>
    </table> -->
  </div>
</template>

<script>
/* global $ */

import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      status: {
        loadingItem: ''
      },
      totalProducts: 0,
      totalBreadProducts: 0,
      totalCoffeeProducts: 0,
      totalTeaProducts: 0,
      totalCTProducts: 0,
      totalSPProducts: 0,
      filterFlag: false,
      tmpPaged: 8
    }
  },
  methods: {
    goPage (item) {
      console.log(this.$router)

      this.$router.push(`/product/${item.id}`)
    },
    getProducts (page = 1, filter = '') {
      var api = ''
      if (filter === '') {
        this.filterFlag = false
      } else {
        this.filterFlag = true
      }
      // 商品分類
      if (this.filterFlag) {
        api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?paged=${this.totalProducts}&orderBy=category&sort=desc`
      } else {
        api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=12&orderBy=category&sort=desc`
      }
      // var tmpProducts = []
      this.$http.get(api).then((response) => {
        // this.products = response.data.data
        // console.log(response.data.data)
        if (filter !== '') {
          this.products = response.data.data.filter(item => {
            return item.category === filter
          })
        } else {
          this.products = this.products = response.data.data
        }
        $('.filter').removeClass('active')
        $(`[data-filter='${filter}']`).addClass('active')
        // console.log(response.data)
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    addtoCart (item, quantity = 1) {
      this.status.loadingItem = item.id
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity
      }
      this.$http.post(url, cart).then(() => {
        this.status.loadingItem = ''
        this.$bus.$emit('get-cart')
        this.$bus.$emit('message:push',
          '加入成功',
          'success')

        this.getCart()
      }).catch((error) => {
        this.status.loadingItem = ''
        // console.log(error)
        const errorList = error.response.data.errors
        errorList.forEach((err) => {
          this.$bus.$emit('message:push',
            `加入失敗
            ${err}`,
            'danger')
        })
      })
    },
    getCart () {
      this.cartTotal = 0
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`

      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.cart.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity
        })
      })
      this.isLoading = false
    },
    getAllProducts () {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?paged=${this.totalProducts}&orderBy=category&sort=desc`
      this.$http.get(api)
        .then((res) => {
          // console.log(res.data.data)
          var categoryCounts = res.data.data.reduce((obj, item) => {
            // console.log(obj)
            // console.log(item)
            if (item.category in obj) {
              obj[item.category]++
            } else {
              obj[item.category] = 1
            }
            return obj
          }, {})
          this.totalBreadProducts = categoryCounts['麵包/點心']
          this.totalCoffeeProducts = categoryCounts['咖啡']
          this.totalTeaProducts = categoryCounts['茶']
          this.totalCTProducts = categoryCounts['茶那堤']
          this.totalSPProducts = categoryCounts['特調']
          this.totalProducts = res.data.meta.pagination.total
        })
    }
  },
  created () {
    // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_UUID)
    this.isLoading = true
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?`
    this.$http.get(url)
      .then((res) => {
        // console.log(res.data.data)
        // var categoryCounts = res.data.data.reduce((obj, item) => {
        //   // console.log(obj)
        //   // console.log(item)
        //   if (item.category in obj) {
        //     obj[item.category]++
        //   } else {
        //     obj[item.category] = 1
        //   }
        //   return obj
        // }, {})
        // this.totalBreadProducts = categoryCounts['麵包/點心']
        // this.totalCoffeeProducts = categoryCounts['咖啡']
        // this.totalTeaProducts = categoryCounts['茶']
        // this.totalCTProducts = categoryCounts['茶那堤']
        // this.totalSPProducts = categoryCounts['特調']
        this.totalProducts = res.data.meta.pagination.total
        this.getAllProducts()
        this.getProducts(1)
      })
  },
  mounted () {
    // console.log($('button'))
  }
}
</script>
<style lang="scss">
  .card{
    .card-mash{
      height: 200px;
      width: 100%;
      overflow: hidden;

    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transform:scale(1,1);
      transition: all 1s ease-out;
      &:hover{
      transform:scale(1.2,1.2);
    }
    }
  }
</style>
