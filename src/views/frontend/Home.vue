<template>
<!-- 前台首頁 -->
  <div id="Home" class="home">
    <div class="bg-white sticky-top">
      <div class="container">
        <!-- <Navbar></Navbar> -->
      </div>
    </div>
    <div class="container py-5">
      <div class="row flex-md-row-reverse flex-column">
        <div class="col-md-6">
          <img
          src="@/assets/dish04.jpg" class="img-fluid  dish">
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3 text-light">
          <h2 class="font-weight-bold">熊樂咖啡廚房</h2>
          <h5 class="font-weight-normal text-light mt-2">
            早午餐、咖啡、下午茶
          </h5>
          <!-- <div class="input-group mb-0 mt-4">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div> -->
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 mt-md-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              src="@/assets/dish02.jpg"
              class="card-img-top rounded-0 dish"
              alt="..."
            />
            <div class="card-body p-0">
              <h4 class="mb-0 mt-4">各式咖啡飲品</h4>
              <div class="d-flex justify-content-between  align-items-center mt-3">
                <p class="card-text text-muted mb-0 w-75">
                  美式、拿鐵、卡布奇諾、特調、風味拿鐵
                </p>
                <button class="btn btn-outline-dark rounded-0 text-nowrap">
                  <router-link class="" :to="{ name: 'products'}" >看菜單</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-md-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img src="@/assets/dish05.jpg" class="card-img-top rounded-0 dish" alt="..."
            />
            <div class="card-body p-0">
              <h4 class="mb-0 mt-4">早午餐</h4>
              <div class="d-flex justify-content-between  align-items-center mt-3">
                <p class="card-text text-muted mb-0 w-75">
                  家常菜料理、手工麵包、自製鬆餅
                </p>
                <button class="btn btn-outline-dark rounded-0 text-nowrap">
                  <router-link class="" :to="{ name: 'products'}" >看菜單</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-dark text-light mt-7">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 d-flex">
                  <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="rounded-circle mr-5" style="width: 160px; height: 160px; object-fit: cover;">
                  <div class="d-flex flex-column">
                    <p class="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                    <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 d-flex">
                  <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="rounded-circle mr-5" style="width: 160px; height: 160px; object-fit: cover;">
                  <div class="d-flex flex-column">
                    <p class="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                    <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-8 d-flex">
                  <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" class="rounded-circle mr-5" style="width: 160px; height: 160px; object-fit: cover;">
                  <div class="d-flex flex-column">
                    <p class="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                    <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container my-7">
      <div class="row">
        <div class="col-md-4">
          <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style="width: 48px; height: 48px; object-fit: cover;">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
        <div class="col-md-4">
          <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style="width: 48px; height: 48px; object-fit: cover;">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
        <div class="col-md-4">
          <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style="width: 48px; height: 48px; object-fit: cover;">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div> -->
    <!-- <div class="bg-light py-7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h3>Lorem ipsum</h3>
            <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
            <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/frontend/Navbar.vue'
export default {
  name: 'Home',
  components: {
    // Navbar
  }
}
</script>
<style lang="scss">
  #Home{
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    background-image: url(~@/assets/bg-cafe.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .dish{
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
</style>
