<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="container">
      <div class="">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <table class="table mt-4">
            <thead>
              <tr>
                <th>下單時間</th>
                <th>購買款項</th>
                <th>付款方式</th>
                <th>應付金額</th>
                <th>是否付款</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody v-if="orders.length">
              <tr
                v-for="(item, key) in orders"
                :key="key"
                :class="{'text-secondary': !item.is_paid}"
              >
                <td>{{ item.created.datetime }}</td>
                <td>
                  <ul class="list-unstyled">
                    <li
                      v-for="(product, i) in item.products"
                      :key="i"
                    >
                      {{ product.product.title }} 數量：{{ product.quantity }}
                      {{ product.product.unit }}
                    </li>
                  </ul>
                </td>
                <td>
                  {{ item.payment }}
                </td>
                <td class="text-right">
                  <!-- 加入四捨五入的filter -->
                  {{ item.amount | round}}
                </td>
                <td>
                  <div class="custom-control custom-switch">
                    <input
                      :id="item.id"
                      v-model="item.paid"
                      type="checkbox"
                      class="custom-control-input"
                      @change="setOrderPaid(item)"
                    >
                    <label
                      class="custom-control-label"
                      :for="item.id"
                    >
                      <strong
                        v-if="item.paid"
                        class="text-success"
                      >已付款</strong>
                      <span
                        v-else
                        class="text-muted"
                      >尚未付款</span>
                    </label>
                  </div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                      <button
                        class="btn btn-outline-primary"
                        :disabled="item.paid"
                        @click.prevent="getDetailed(item.id)"
                      >
                        選擇
                      </button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="Pagination">
            <Pagination
              :pages="pagination"
              @emitPages="getOrders"
            />
          </div>
          <hr class="w-100">
          <form
            class="col-6"
            @submit.prevent="payOrder"
          >
            <table class="table">
              <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
              </thead>
              <tbody>
                <tr
                  v-for="(item, key) in order.products"
                  :key="key"
                >
                  <td class="align-middle">
                    {{ item.product.title }}
                  </td>
                  <td class="align-middle">
                    {{ item.quantity }}/{{ item.product.unit }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.product.price | round}}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colspan="2"
                    class="text-right"
                  >
                    總計
                  </td>
                  <td class="text-right">
                    {{ order.amount }}
                  </td>
                </tr>
              </tfoot>
            </table>

            <table class="table">
              <tbody>
                <tr>
                  <th width="100">
                    Email
                  </th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.paid">尚未付款</span>
                    <span
                      v-else
                      class="text-success"
                    >付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-if="order.paid === false"
              class="text-center"
            >
              <button class="btn btn-danger">
                確認付款去
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      order: {
        user: {}
      },
      orders: [],
      orderId: '',
      isNew: false,
      pagination: {},
      isLoading: false,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (pages = 1) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders?page=${pages}&paged=5`

      this.$http.get(url).then((response) => {
        this.orders = response.data.data
        this.pagination = response.data.meta.pagination

        this.isLoading = false
      })
    },
    getDetailed (id) {
      this.isLoading = true
      this.orderId = id

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/ec/orders/${id}`

      this.$http.get(url).then((response) => {
        this.order = response.data.data

        this.isLoading = false
      })
    },
    // 更改訂單付款狀態API
    setOrderPaid (item) {
      // 當 checkbox 狀態改變時傳入付款的api url，
      let url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders/${item.id}/paid`
      // 當 item.paid 狀態為false時改為取消付款狀態的api url
      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders/${item.id}/unpaid`
      }

      this.$http.patch(url, item.id).then(() => {
        this.$bus.$emit('message:push',
          '付款狀態已修改，好棒ヽ(＾Д＾)ﾉ ',
          'success')
        // 重新取得orders列表
        this.getOrders()
      })
    }
  }
}
</script>
<style lang="scss">
  .Pagination{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
