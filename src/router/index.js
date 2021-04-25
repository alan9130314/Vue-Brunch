import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Shop.vue'
import Dashboard from '../views/backend/layout/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/' // 導回首頁
  },
  {
    path: '/', // 外圍的版
    // name: '首頁',
    component: Home,
    children: [
      {
        path: '', // 首頁
        name: 'Home',
        component: () => import('../views/frontend/Home.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id', // 動態路由 - 路徑後面加上冒號 : ，再給上參數的暱稱
        name: 'product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/frontend/Checkout.vue')
      },
      {
        path: '/checkout_complete/:orderId',
        name: 'checkout_complete',
        component: () => import('../views/frontend/CheckoutComplete.vue')
      }
    ]
  },
  // 巢狀路由
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/backend/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Dashboard,
    children: [
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'storages',
        name: 'admin-storages',
        component: () => import('../views/backend/Storages.vue')
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'admin-coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'storages',
        name: 'admin-storages',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true }
      },
      // Customer
      {
        path: 'customer_order',
        name: 'admin-customer_order',
        component: () => import('../views/backend/CustomerOrders.vue')
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'admin-customer_checkout',
        component: () => import('../views/backend/CustomerCheckout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
