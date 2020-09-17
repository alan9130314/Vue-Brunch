import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('/') // 導回首頁
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        name: 'Pro產品列表ducts',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id', // 動態路由 - 路徑後面加上冒號 : ，再給上參數的暱稱
        name: '產品頁面',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/About.vue')
      },
      {
        path: '/checkout',
        name: '結帳',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: '/checkout_complete',
        name: '結帳完成',
        component: () => import('../views/CheckoutComplete.vue')
      }
    ]
  },
  // 巢狀路由
  {
    path: '/login',
    component: () => import('../views/dashboard/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'pictures',
        component: () => import('../views/dashboard/Pictures.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
