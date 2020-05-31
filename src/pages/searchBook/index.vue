<template>
  <div id="searchContainer">
    <div class="searchHeader">
      <input @confirm="handleSearch" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click="handleClear" class="clear" v-show="searchContent">X</span>
    </div>
    <div v-if="booksArr.length">
      <BooksList :booksArr="booksArr"/>
    </div>
  </div>
</template>

<script>
  import BooksList from '../booksList/index'
  import request from '../../utils/request'
  export default {
    components: {
      BooksList
    },
    data () {
      return {
        searchContent: '',
        booksArr: []
      }
    },
    methods: {
      async handleSearch () {
        let data = {req: this.searchContent}
        let result = await request('/searchBooks', data)
        console.log(result)
        this.booksArr = result
      },
      handleClear () {
        this.searchContent = ''
        this.booksArr = []
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .searchHeader
      width 80%
      height 80rpx
      margin auto
      border-bottom  1rpx solid #02a744
      position relative
      input
        height 100%
        width 100%
        .placeholder
          color #02a744
          text-align center
          font-size 28rpx
      .clear
        position absolute
        right 20rpx
        top 20rpx
        z-index 3
</style>
