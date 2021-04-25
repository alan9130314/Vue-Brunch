<template>
  <div id="Login">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">
        後台管理系統
      </h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input id="inputEmail" v-model="user.email" type="email"
          class="form-control" placeholder="Email address"
          required autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input id="inputPassword" v-model="user.password" type="password" class="form-control"
          placeholder="Password" required>
      </div>
      <button class="btn btn-lg btn-dark btn-block" type="submit">
        登入
      </button>
      <br>
      <button class="btn btn-dark btn-block" type="button" @click="signout">
        登出
      </button>
      <br>
      <button class="btn btn-dark btn-block" type="button" @click="getData">
        取得資料
      </button>
      <p class="mt-5 mb-3 text-muted">
        &copy; 2021~∞ - 咖啡廚房
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: ''
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}api/auth/login`
      this.$http.post(api, this.user).then((response) => {
        const { token } = response.data
        const { expired } = response.data
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`
        this.$router.push('/admin/products')
      }).catch((error) => {
        console.log(error)
        this.$bus.$emit('message:push',
          error,
          'danger')
      })
    },
    signout () {
      document.cookie = 'hexToken=;expires=;'
      console.log('token 已清除')
    },
    getData () {
      // 取得 token 的 cookies（注意取得的時間點）
      // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

      // API
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`

      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
      })
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  text-align: center;
}
body {
  align-items: center;
  justify-content: center;
  // 背景混色模式
  // background-color: rgba(0, 0, 0, .8);
  // background-blend-mode: multiply;
  // background-image: url(~@/assets/bg-cafe.jpg);
  background-repeat: no-repeat;
  background-size: cover;

}
#Login{
  // display: flex;
  width: 300px;
  // margin: auto;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
</style>
