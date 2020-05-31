<script>
  import request from './utils/request'
  export default {
    async mounted () {
      wx.login({
        success: async (res) => {
          console.log(res)
          let code = res.code
          console.log(code)
          let token = await request('/getOpenId', {code})
          console.log(token)
          wx.setStorageSync('token', token)
        }
      })
      let result = await request('/test')
      console.log('验证结果：', result)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%
    height 100%
    #firstViewContainer
      width 100%
      height 100%
      swiper
        width 100%
        height 100%
        img
          width 100%
          height 100%
</style>
