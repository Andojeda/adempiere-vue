// ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
// Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
// Contributor(s): Yamel Senih ysenih@erpya.com www.erpya.com
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import {
  findProduct,
  requestUpdateOrderLine
} from '@/api/ADempiere/form/point-of-sales.js'
import {
  formatDate,
  formatPrice,
  formatQuantity
} from '@/utils/ADempiere/valueFormat.js'
import orderLineMixin from './Order/orderLineMixin.js'

export default {
  name: 'POSMixin',
  mixins: [
    orderLineMixin
  ],
  props: {
    metadata: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      product: {},
      currentTable: 0,
      orderLines: [],
      products: {
        uuid: '',
        quantityAvailable: 0
      },
      edit: false,
      displayType: ''
    }
  },
  computed: {
    getWarehouse() {
      return this.$store.getters['user/getWarehouse']
    },
    isSetTemplateBP() {
      const currentPOS = this.currentPointOfSales
      if (!this.isEmptyValue(currentPOS) &&
        !this.isEmptyValue(currentPOS.templateBusinessPartner) &&
        this.isEmptyValue(this.$route.query.action)) {
        return currentPOS.templateBusinessPartner
      }
      return false
    },
    updateOrderProcessPos() {
      return this.$store.getters.getUpdateOrderPos
    },
    currentPointOfSales() {
      return this.$store.getters.posAttributes.currentPointOfSales
    },
    // Currency Point Of Sales
    pointOfSalesCurrency() {
      // const currency = this.currentPointOfSales
      if (!this.isEmptyValue(this.currentPointOfSales.priceList)) {
        return {
          ...this.currentPointOfSales.priceList.currency,
          amountConvertion: 1
        }
      }
      return {
        uuid: '',
        iSOCode: '',
        curSymbol: '',
        amountConvertion: 1
      }
    },
    listPointOfSales() {
      return this.$store.getters.posAttributes.listPointOfSales
    },
    ordersList() {
      if (this.isEmptyValue(this.currentPointOfSales)) {
        return []
      }
      return this.currentPointOfSales.listOrder
    },
    currentOrder() {
      if (this.isEmptyValue(this.currentPointOfSales)) {
        return {
          documentType: {},
          documentStatus: {
            value: ''
          },
          totalLines: 0,
          grandTotal: 0,
          salesRepresentative: {},
          businessPartner: {
            value: '',
            uuid: ''
          }
        }
      }
      return this.currentPointOfSales.currentOrder
    },
    isDisabled() {
      return this.currentPointOfSales.currentOrder.isProcessed
    },
    listOrderLine() {
      if (this.isEmptyValue(this.currentOrder)) {
        return []
      }
      return this.currentOrder.lineOrder
    }
  },
  watch: {
    currentOrder(value) {
      if (this.isEmptyValue(value)) {
        this.orderLines = []
        this.$store.dispatch('listOrderLine', [])
        this.listOrderLines()
      } else {
        this.$store.commit('updateValuesOfContainer', {
          parentUuid: this.parentUuid,
          containerUuid: this.containerUuid,
          attributes: [{
            columnName: 'C_BPartner_ID',
            value: value.businessPartner.id
          },
          {
            columnName: 'DisplayColumn_C_BPartner_ID',
            value: value.businessPartner.name
          },
          {
            columnName: ' C_BPartner_ID_UUID',
            value: value.businessPartner.uuid
          }]
        })
      }
    },
    updateOrderProcessPos(value) {
      if (!value && !this.isEmptyValue(this.$route.query)) {
        this.reloadOrder(true)
      }
    }
  },
  beforeMount() {
    this.unsubscribe = this.subscribeChanges()
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    formatDate,
    formatPrice,
    formatQuantity,
    withoutPOSTerminal() {
      if (this.isEmptyValue(this.currentPointOfSales)) {
        this.$message({
          type: 'warn',
          message: 'Without POS Terminal',
          showClose: true
        })
        return true
      }
      return false
    },
    arrowTop() {
      if (this.currentTable > 0) {
        this.currentTable--
        this.$refs.linesTable.setCurrentRow(this.listOrderLine[this.currentTable])
        this.currentOrderLine = this.listOrderLine[this.currentTable]
      }
    },
    arrowBottom() {
      const top = this.listOrderLine.length - 1
      if (this.currentTable < top) {
        this.currentTable++
        this.$refs.linesTable.setCurrentRow(this.listOrderLine[this.currentTable])
        this.currentOrderLine = this.listOrderLine[this.currentTable]
      }
    },
    updateOrder(update) {
      // user session
      if (!this.isEmptyValue(update.value) && update.value !== this.currentOrder.businessPartner.uuid && !this.isEmptyValue(this.currentPointOfSales)) {
        this.$store.dispatch('updateOrder', {
          orderUuid: this.$route.query.action,
          posUuid: this.currentPointOfSales.uuid,
          customerUuid: update.value
        })
      }
    },
    setBusinessPartner({ name, id, uuid }) {
      // Use update values of container (without subscription)
      this.$store.commit('updateValuesOfContainer', {
        parentUuid: this.parentUuid,
        containerUuid: this.containerUuid,
        attributes: [{
          columnName: 'C_BPartner_ID',
          value: id
        },
        {
          columnName: 'DisplayColumn_C_BPartner_ID',
          value: name
        },
        {
          columnName: ' C_BPartner_ID_UUID',
          value: uuid
        }]
      })
    },
    findProduct(searchValue) {
      if (this.withoutPOSTerminal()) {
        return
      }

      const searchProduct = (typeof searchValue === 'object') ? searchValue.value : searchValue

      findProduct({
        searchValue: searchProduct,
        priceListUuid: this.currentPointOfSales.priceList.uuid
      })
        .then(productPrice => {
          this.product = productPrice.product
          this.createOrder(true)
        })
        .catch(error => {
          console.warn(error.message)
          this.$message({
            type: 'info',
            message: error.message,
            showClose: true
          })

          this.$store.commit('updateValueOfField', {
            containerUuid: 'Products-Price-List',
            columnName: 'ProductValue',
            value: `${searchProduct}`
          })

          this.$store.commit('showListProductPrice', {
            attribute: 'isShowPopoverField',
            isShowed: true
          })
        })
        .finally(() => {
          this.$store.commit('updateValuesOfContainer', {
            containerUuid: this.metadata.containerUuid,
            attributes: [{
              columnName: 'ProductValue',
              value: undefined
            }]
          })
        })
    },
    createOrder(withLine) {
      if (this.withoutPOSTerminal()) {
        return
      }
      const orderUuid = this.$route.query.action
      if (this.isEmptyValue(orderUuid)) {
        const posUuid = this.currentPointOfSales.uuid
        let customerUuid = this.$store.getters.getValueOfField({
          containerUuid: this.metadata.containerUuid,
          columnName: 'C_BPartner_ID_UUID'
        })
        const id = this.$store.getters.getValueOfField({
          containerUuid: this.metadata.containerUuid,
          columnName: 'C_BPartner_ID'
        })
        if (this.isEmptyValue(customerUuid) || id === 1000006) {
          customerUuid = this.currentPointOfSales.templateBusinessPartner.uuid
        }
        // user session
        this.$store.dispatch('createOrder', {
          posUuid,
          customerUuid,
          salesRepresentativeUuid: this.currentPointOfSales.salesRepresentative.uuid
        })
          .then(response => {
            // this.order = response
            this.reloadOrder(true, response.uuid)
            this.$router.push({
              params: {
                ...this.$route.params
              },
              query: {
                ...this.$route.query,
                action: response.uuid
              }
            }).then(() => {
              if (withLine) {
                this.createOrderLine(response.uuid)
              }
              this.$store.dispatch('listOrdersFromServer', {
                posUuid: this.currentPointOfSales.uuid
              })
            }).catch(() => {})
          })
      } else {
        this.createOrderLine(orderUuid)
      }
    },
    reloadOrder(requery, orderUuid) {
      if (requery) {
        if (this.isEmptyValue(orderUuid)) {
          orderUuid = this.$route.query.action
          // if (this.isEmptyValue(orderUuid)) {
          //   orderUuid = this.$store.getters.currentOrder.uuid // this.currentOrder.uuid
          // }
        }
        if (!this.isEmptyValue(orderUuid)) {
          this.$store.dispatch('reloadOrder', { orderUuid })
        }
      }
    },
    fillOrder(order, setToStore = true) {
      const orderToPush = {
        uuid: order.uuid,
        id: order.id,
        businessPartner: order.businessPartner, // description, duns, id, lastName, naics, name, taxId, uuid, value
        documentNo: order.documentNo,
        dateOrdered: order.dateOrdered,
        documentStatus: order.documentStatus, // value, name, description
        documentType: order.documentType, // name, printName
        salesRepresentative: order.salesRepresentative, // id, uuid, name, description,
        totalLines: order.totalLines,
        grandTotal: order.grandTotal
      }
      if (setToStore) {
        this.$store.dispatch('setOrder', {
          ...orderToPush
        })
      }
      if (!this.isEmptyValue(order.businessPartner)) {
        const { businessPartner } = order
        this.setBusinessPartner(businessPartner)
      }
      // this.order = orderToPush
    },
    getOrderTax(currency) {
      return this.formatPrice(this.currentOrder.grandTotal - this.currentOrder.totalLines, currency)
    },
    subscribeChanges() {
      return this.$store.subscribe((mutation, state) => {
        // TODO: Add container uuid comparison
        if (mutation.type === 'addActionKeyPerformed') {
          switch (mutation.payload.columnName) {
            case 'ProductValue':
              this.findProduct(mutation.payload.value)
              break
          }
        } else if (mutation.type === 'addActionPerformed') {
          switch (mutation.payload.columnName) {
            case 'QtyEntered':
            case 'PriceEntered':
            case 'Discount':
              if (!this.isEmptyValue(this.$store.state['pointOfSales/orderLine/index'].line)) {
                this.updateOrderLine(mutation.payload)
              }
              break
          }
        } else if (mutation.type === 'updateValueOfField') {
          switch (mutation.payload.columnName) {
            case 'DisplayColumn_TenderType':
              this.displayType = mutation.payload.value
              break

            case 'C_BPartner_ID_UUID': {
              const bPartnerValue = mutation.payload.value
              if (!this.isEmptyValue(this.currentPointOfSales)) {
                const bPartnerPOS = this.currentPointOfSales.templateBusinessPartner.uuid
                // Does not send values to server, when empty values are set or
                // if BPartner set equal to BPartner POS template
                if (this.isEmptyValue(bPartnerValue) || bPartnerValue === bPartnerPOS) {
                  break
                }
              }
              this.updateOrder(mutation.payload)
              break
            }
          }
        }
      })
    },
    shortcutKeyMethod(event) {
      switch (event.srcKey) {
        // case 'options':
        case 'up':
          this.arrowTop()
          break
        case 'popoverConvet':
          this.seeConversion = !this.seeConversion
          break
        case 'down':
          this.arrowBottom()
          break
        case 'plus':
          requestUpdateOrderLine({
            orderLineUuid: this.currentOrderLine.uuid,
            quantity: this.listOrderLine[this.currentTable].quantity + 1
          })
            .then(response => {
              this.fillOrderLine(response)
              this.reloadOrder(true)
            })
            .catch(error => {
              console.error(error.message)
              this.$message({
                type: 'error',
                message: error.message,
                showClose: true
              })
            })

          break
        case 'minus':
          requestUpdateOrderLine({
            orderLineUuid: this.currentOrderLine.uuid,
            quantity: this.listOrderLine[this.currentTable].quantity - 1
          })
            .then(response => {
              this.fillOrderLine(response)
              this.reloadOrder(true)
            })
            .catch(error => {
              console.error(error.message)
              this.$message({
                type: 'error',
                message: error.message,
                showClose: true
              })
            })
          break
      }
    },
    newOrder() {
      this.$router.push({
        params: {
          ...this.$route.params
        },
        query: {
          pos: this.currentPointOfSales.id
        }
      }).catch(() => {
      }).finally(() => {
        this.$store.commit('setListPayments', [])
        const { templateBusinessPartner } = this.currentPointOfSales
        this.$store.commit('updateValuesOfContainer', {
          containerUuid: this.metadata.containerUuid,
          attributes: [{
            columnName: 'UUID',
            value: undefined
          },
          {
            columnName: 'ProductValue',
            value: undefined
          },
          {
            columnName: 'C_BPartner_ID',
            value: templateBusinessPartner.id
          },
          {
            columnName: 'DisplayColumn_C_BPartner_ID',
            value: templateBusinessPartner.name
          },
          {
            columnName: ' C_BPartner_ID_UUID',
            value: templateBusinessPartner.uuid
          }]
        })
        this.$store.dispatch('setOrder', {
          documentType: {},
          documentStatus: {
            value: ''
          },
          totalLines: 0,
          grandTotal: 0,
          salesRepresentative: {},
          businessPartner: {
            value: '',
            uuid: ''
          }
        })
        this.$store.commit('setShowPOSCollection', false)
        this.$store.dispatch('listOrderLine', [])
      })
    },
    changePos(posElement) {
      this.$store.dispatch('setCurrentPOS', posElement)
      this.newOrder()
    }
  }
}
