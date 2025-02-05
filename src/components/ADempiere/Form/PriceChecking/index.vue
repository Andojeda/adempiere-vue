<!--
 ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
 Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
 Contributor(s): Edwin Betancourt edwinBetanc0urt@hotmail.com www.erpya.com
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https:www.gnu.org/licenses/>.
-->
<template>
  <div
    v-if="isLoaded"
    style="height: 100% !important;"
    @click="focusProductValue"
  >
    <el-container style="height: 100% !important;">
      <img
        fit="contain"
        :src="backgroundForm"
        class="background-price-checking"
        style="z-index: 2;"
      >
      <el-main>
        <el-form
          key="form-loaded"
          class="inquiry-form"
          label-position="top"
          label-width="10px"
          @submit.native.prevent="notSubmitForm"
        >
          <field
            v-for="(field) in fieldsList"
            ref="ProductValue"
            :key="field.columnName"
            :metadata-field="field"
            :v-model="field.value"
            class="product-value"
          />
        </el-form>

        <div class="inquiry-product" style="z-index: 4;">
          <el-row v-if="!isEmptyValue(productPrice)" :gutter="20">
            <el-col style="padding-left: 0px; padding-right: 0%;">
              <div class="product-description">
                {{ productPrice.productName }} {{ productPrice.productDescription }}
              </div>
              <br><br><br>

              <div class="product-price-base">
                {{ $t('form.priceChecking.basePrice') }}
                <span class="amount">
                  {{ formatPrice(productPrice.priceBase, productPrice.currency.iSOCode) }}
                </span>
              </div>
              <br><br><br>

              <div class="product-tax">
                {{ productPrice.taxName }}
                <span class="amount">
                  {{ formatPrice(productPrice.taxAmt, productPrice.currency.iSOCode) }}
                </span>
              </div>
              <br><br><br>

              <div class="product-price amount">
                <span style="float: right;"> {{ formatPrice(productPrice.grandTotal, productPrice.currency.iSOCode) }} </span> <br>
                {{ formatPrice(productPrice.schemaGrandTotal, productPrice.schemaCurrency.iSOCode) }}
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="inquiry-product" style="z-index: 4;">
          <el-row v-if="!messageError" :gutter="20">
            <el-col style="padding-left: 0px; padding-right: 0%;">
              <div class="product-price amount">
                {{ $t('form.priceChecking.productNotFound') }}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
  <div
    v-else
    key="form-loading"
    v-loading="!isLoaded"
    :element-loading-text="$t('notifications.loading')"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.8)"
    class="loading-panel"
  />
</template>

<script>
import formMixin from '@/components/ADempiere/Form/formMixin.js'
import fieldsList from './fieldsList.js'
import { requestGetProductPrice } from '@/api/ADempiere/form/price-checking.js'
import { formatPercent, formatPrice } from '@/utils/ADempiere/valueFormat.js'
import { buildImageFromArrayBuffer } from '@/utils/ADempiere/resource.js'
import { requestImage } from '@/api/ADempiere/common/resource.js'

export default {
  name: 'PriceChecking',
  mixins: [
    formMixin
  ],
  data() {
    return {
      messageError: true,
      fieldsList,
      productPrice: {},
      organizationBackground: '',
      currentImageOfProduct: '',
      search: 'sad',
      resul: '',
      load: '',
      unsubscribe: () => {}
    }
  },
  computed: {
    organizationImagePath() {
      return this.$store.getters.corporateBrandingImage
    },
    defaultImage() {
      return require('@/image/ADempiere/priceChecking/no-image.jpg')
    },
    backgroundForm() {
      if (this.isEmptyValue(this.organizationImagePath)) {
        return this.defaultImage
      }
      if (this.isEmptyValue(this.currentImageOfProduct)) {
        return this.organizationBackground
      }
      return this.currentImageOfProduct
    },
    currentPoint() {
      return this.$store.getters.posAttributes.currentPointOfSales
    }
  },
  created() {
    this.$store.dispatch('listPointOfSalesFromServer')
    this.unsubscribe = this.subscribeChanges()
  },
  mounted() {
    this.getImage()
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    async getImage(imageName = '') {
      let isSetOrg = false
      if (this.isEmptyValue(imageName)) {
        if (!this.isEmptyValue(this.organizationBackground)) {
          return this.organizationBackground
        }
        isSetOrg = true
        imageName = this.organizationImagePath
      }
      // the name of the image plus the height and width of the container is sent
      const imageBuffer = await requestImage({
        file: imageName,
        width: 750,
        height: 380
      }).then(responseImage => {
        const arrayBufferAsImage = buildImageFromArrayBuffer({
          arrayBuffer: responseImage
        })
        if (isSetOrg) {
          this.organizationBackground = arrayBufferAsImage
          return arrayBufferAsImage
        }

        this.currentImageOfProduct = arrayBufferAsImage
        return arrayBufferAsImage
      })
      return imageBuffer
    },
    focusProductValue() {
      if (!this.isEmptyValue(this.$refs.ProductValue[0])) {
        this.$refs.ProductValue[0].$children[0].$children[0].$children[1].$children[0].focus()
      }
    },
    formatPercent,
    formatPrice,
    subscribeChanges() {
      return this.$store.subscribe((mutation, state) => {
        if ((mutation.type === 'currentPointOfSales') || (mutation.type === 'setListProductPrice') || (mutation.type === 'addFocusLost')) {
          this.focusProductValue()
        }
        if ((mutation.type === 'addActionKeyPerformed') && mutation.payload.columnName === 'ProductValue' && (this.productPrice.upc !== mutation.payload.value)) {
          // cleans all values except column name 'ProductValue'
          this.search = mutation.payload.value
          if (!this.isEmptyValue(this.search) && this.search.length >= 4) {
            requestGetProductPrice({
              searchValue: mutation.payload.value,
              priceListUuid: this.currentPoint.priceList.uuid
            })
              .then(productPrice => {
                this.messageError = true
                const { product, taxRate, priceStandard: priceBase } = productPrice
                const { rate } = taxRate
                const { imageURL: image } = product

                this.productPrice = {
                  currency: productPrice.currency,
                  image,
                  grandTotal: this.getGrandTotal(priceBase, rate),
                  productName: product.name,
                  productDescription: product.description,
                  priceBase,
                  priceStandard: productPrice.priceStandard,
                  priceList: productPrice.priceList,
                  priceLimit: productPrice.priceLimit,
                  schemaCurrency: productPrice.schemaCurrency,
                  schemaGrandTotal: this.getGrandTotal(productPrice.schemaPriceStandard, rate),
                  schemaPriceStandard: productPrice.schemaPriceStandard,
                  schemaPriceList: productPrice.schemaPriceList,
                  schemaPriceLimit: productPrice.schemaPriceLimit,
                  taxRate: rate,
                  taxName: taxRate.name,
                  taxIndicator: taxRate.taxIndicator,
                  taxAmt: this.getTaxAmount(priceBase, rate),
                  upc: product.upc
                }
              })
              .catch(() => {
                this.messageError = false
                this.timeMessage()
                this.productPrice = {}
              })
              .finally(() => {
                this.$store.commit('updateValueOfField', {
                  containerUuid: this.containerUuid,
                  columnName: 'ProductValue',
                  value: ''
                })
                this.search = ''
                this.currentImageOfProduct = ''
                if (this.isEmptyValue(this.productPrice.image)) {
                  this.getImage(this.productPrice.image)
                }
              })
          }
        } else if ((mutation.type === 'updateValueOfField') && (mutation.payload.columnName === 'ProductValue') && !this.isEmptyValue(mutation.payload.value) && (this.productPrice.upc !== mutation.payload.value)) {
          clearTimeout(this.timeOut)
          this.timeOut = setTimeout(() => {
            let value = mutation.payload.value
            if (typeof value[value.length - 1] === 'string') {
              value = mutation.payload.value.slice(0, -1)
            }
            requestGetProductPrice({
              searchValue: mutation.payload.value,
              priceListUuid: this.currentPoint.priceList.uuid
            })
              .then(productPrice => {
                this.messageError = true
                const { product, taxRate, priceStandard: priceBase } = productPrice
                const { rate } = taxRate
                const { imageURL: image } = product
                this.productPrice = {
                  currency: productPrice.currency,
                  image,
                  grandTotal: this.getGrandTotal(priceBase, rate),
                  productName: product.name,
                  productDescription: product.description,
                  priceBase,
                  priceStandard: productPrice.priceStandard,
                  priceList: productPrice.priceList,
                  priceLimit: productPrice.priceLimit,
                  schemaCurrency: productPrice.schemaCurrency,
                  schemaGrandTotal: this.getGrandTotal(productPrice.schemaPriceStandard, rate),
                  schemaPriceStandard: productPrice.schemaPriceStandard,
                  schemaPriceList: productPrice.schemaPriceList,
                  schemaPriceLimit: productPrice.schemaPriceLimit,
                  taxRate: rate,
                  taxName: taxRate.name,
                  taxIndicator: taxRate.taxIndicator,
                  taxAmt: this.getTaxAmount(priceBase, rate)
                }
              })
              .catch(() => {
                this.messageError = false
                this.timeMessage()
                this.productPrice = {}
              })
              .finally(() => {
                this.$store.commit('updateValueOfField', {
                  containerUuid: this.containerUuid,
                  columnName: 'ProductValue',
                  value: ''
                })
                this.search = ''
                this.currentImageOfProduct = ''
                if (this.isEmptyValue(this.productPrice.image)) {
                  this.getImage(this.productPrice.image)
                }
              })
          }, 500)
        }
        if (mutation.type === 'changeFormAttribute') {
          this.focusProductValue()
        }
      })
    },
    timeMessage() {
      setTimeout(() => {
        this.messageError = true
      }, 2000)
    },
    getTaxAmount(basePrice, taxRate) {
      if (this.isEmptyValue(basePrice) || this.isEmptyValue(taxRate)) {
        return 0
      }
      return (basePrice * taxRate) / 100
    },
    getGrandTotal(basePrice, taxRate) {
      if (this.isEmptyValue(basePrice)) {
        return 0
      }
      return basePrice + this.getTaxAmount(basePrice, taxRate)
    }
  }
}
</script>

<style lang="scss" scoped>
  .background-price-checking {
    width: 100%;
    height: 100%;
    float: inherit;
    // color: white;
    // opacity: 0.5;
  }

  .product-description {
    color: #32363a;
    font-size: 30px;
    float: right;
    padding-bottom: 0px;
  }
  .product-price-base, .product-tax {
    font-size: 30px;
    float: right;
  }
  .product-price {
    padding-top: 15px;
    font-size: 50px;
    float: right;
  }

  .inquiry-form {
    position: absolute;
    right: 5%;
    width: 100%;
    top: 10%;
    z-index: 0;
  }
  .inquiry-product {
    position: absolute;
    right: 20%;
    width: 100%;
    top: 33%;
    .amount {
      color: black;
      font-weight: bold;
    }
  }
</style>
<style lang="scss">
  .price-inquiry {
    input {
      color: #606266 !important;
      font-size: 100% !important;
    }
  }
  .product-value {
    float: right;
    padding-right: 0% !important;
    z-index: 0;
    .el-form-item__label {
      font-size: 15px !important;
      color: #000 !important;
    }
  }

  .el-aside {
    background: white;
    width: 60%;
    overflow: hidden;
  }

  .el-form-item {
    margin-bottom: 10px !important;
    margin-left: 10px;
    margin-right: 0px !important;
  }
</style>
