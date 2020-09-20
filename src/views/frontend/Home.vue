<template>
  <div class="home">
    <Sidebar />
    <router-view></router-view>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/frontend/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>
