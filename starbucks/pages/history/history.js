// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    num: '',
    price: '',
    historyList: [],
    hasHistory:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const historyList = this.data.historyList
    var that = this
    wx.getStorage({
      //获取数据的key
      key: "key",
      success: function (res) {
        // console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          historyList[i] = res.data[i]
        }
        for (let i = 0; i < historyList.length; i++) {
          if (historyList[i] == null) {
            historyList.splice(i, 1);
            i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
            // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑

            console.log(historyList);
          }
        }
        const hasHistory = that.data.hasHistory
        that.setData({
          historyList,
          hasHistory:true,
        })       
        // console.log(historyList)
      }
    })
    
    
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})