<template>
  <div id="firstViewContainer">
    <swiper @change="handleChange" :indicator-dots="index !== 3" indicator-color="gray" indicator-active-color="darkslategray">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toIndex" class="btn" v-show="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0
      }
    },
    methods: {
      handleChange (event) {
        this.index = event.mp.detail.current
      },
      toIndex () {
        wx.switchTab({
          url: '/pages/index/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .btn
    width 280rpx
    height  80rpx
    text-align center
    line-height 80rpx
    position absolute
    bottom 20rpx
    left 50%
    margin-left -140rpx
    background rgba(255, 255, 255, .5)
</style>
