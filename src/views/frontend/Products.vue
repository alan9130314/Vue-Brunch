<template>
  <div class="about">
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-3"  v-for="item in products" :key="item.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <div class="card-mash">
              <img :src=item.imageUrl[0] class="card-img-top rounded-0" alt="...">
            </div>
            <a href="#" class="text-dark">
              <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
            </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><router-link :to="`/product/${item.id}`" >{{ item.title }}</router-link></h4>
              <p v-html="item.content" class="card-text text-muted mb-0"></p>
              <del class="text-muted mt-3">NT$ {{ item.origin_price}}</del>
              <p class="text-muted mt-3 font-weight-bold">NT$ {{ item.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center">
        <Pagination
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
// /* global $ */

import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    goPage (item) {
      console.log(this.$router)

      this.$router.push(`/product/${item.id}`)
    },
    getProducts (page = 1) {
      this.isLoading = true

      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=8`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    }
  },
  created () {
    // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_UUID)
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?paged=8`
    this.$http.get(url)
      .then((res) => {
        // console.log(res)
        this.products = res.data.data
      })
    this.getProducts()
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
