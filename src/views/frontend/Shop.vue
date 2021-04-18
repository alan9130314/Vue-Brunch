<template>
  <div id="app">
    <!-- <Toast /> -->
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// import Toast from '@/components/Toasts.vue'
import Navbar from '@/components/frontend/Navbar.vue'
import Footer from '@/components/frontend/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
    // Toast,
  }
  // data () {
  //   return {
  //     isLoading: false
  //   }
  // }
}
</script>
