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
    component: () => import('../views/frontend/Home.vue'),
    children: [
      {
        path: '/products',
        name: '前台產品頁面',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id', // 動態路由 - 路徑後面加上冒號 : ，再給上參數的暱稱
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: '/checkout',
        name: '結帳',
        component: () => import('../views/frontend/Checkout.vue')
      },
      {
        path: '/checkout_complete',
        name: '結帳完成',
        component: () => import('../views/frontend/CheckoutComplete.vue')
      }
    ]
  },
  // 巢狀路由
  {
    path: '/login',
    name: 'Admin 頁面',
    component: () => import('../views/frontend/Login.vue')
  },
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品頁面',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'Storages',
        name: '圖片頁面',
        component: () => import('../views/backend/Storages.vue')
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true }
      },
      // Customer
      {
        path: 'customer_order',
        name: '用戶訂單',
        component: () => import('../views/backend/CustomerOrders.vue')
      },
      {
        path: 'customer_checkout/:orderId',
        name: '用戶訂單列表',
        component: () => import('../views/backend/CustomerCheckout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
