<template>
<div  id="navbar">
  <div class="container">
    <nav class="navbar px-0 navbar-expand-lg navbar-dark ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bg-transparent custom-header-md-open" id="navbarNav">
        <ul class="navbar-nav justify-content-center align-items-center">
          <li class="nav-item ">
            <router-link class="navbar-brand " :to="{name:'Home'}">
              <img src="@/assets/brunch_logo.jpg" alt="" style="width:5rem;height:5rem">
            </router-link>
          </li>
          <li class="nav-item ">
            <!-- <a class="nav-link pl-0" href="./product.html">產品列表</a> -->
            <router-link class="nav-link" :to="{ name: 'products'}" >產品列表</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="./detail.html">購物車</a> -->
            <router-link class="nav-link" :to="{ name: 'cart'}" >購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about'}">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'checkout'}">結帳</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'admin'}">後台</router-link>
          </li> -->
        </ul>
      </div>
      <div class="d-flex">
        <a href="#" @click.prevent="goPage()">
          <i class="fas fa-shopping-cart text-muted"></i>
          <span class="badge badge-pill badge-danger"
          style="transform: translateX(-9px) translateY(4px);" v-if="carts.length">{{ carts.length }}</span>
          </a>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
// /* global $ */

export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`)
        .then(res => {
          // console.log('購物車內容:', res)
          this.carts = res.data.data
        })
    },
    goPage () {
      // console.log(this.$router)
      this.$router.push('/cart')
    }

  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
<style lang="scss"  type="text/css" >
  #navbar{
    background: rgba(0,0,0,0.85);
    .navbar{
      height: 5rem;
      z-index: 99;
    }
  }
  ul.navbar-nav{
    background-color: rgb(38,38,38);
  }
  .navbar-dark .navbar-nav .active > .nav-link,.router-link-exact-active{
    color: #C39A5A;
    border-bottom: 1px solid #C39A5A;
  }
  .navbar-dark .navbar-nav .nav-link:hover{
    color: #C39A5A;
    border-bottom: 1px solid #C39A5A;
  }
  #header .router-link-exact-active{
    color: #C39A5A;
    border-bottom: 1px solid #C39A5A;

  }
  @media (min-width: 992px){
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        margin-right: 1rem;
    }
  }
  a {
    color: #000000de;
    text-decoration: none;
    background-color: transparent;
  }
  a:hover{
    color: #222222de;
    text-decoration: none;
    background-color: transparent;
  }
  .fa-heart:hover{
    color: #dc3545;
  }
</style>
