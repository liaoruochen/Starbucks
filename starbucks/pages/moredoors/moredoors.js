// pages/moredoors/moredoors.js

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starbucksDoors: [],
  },
  map(e){
    const id = e.currentTarget.dataset.id;
    // console.log(id)
    wx.navigateTo({
      url:`../../pages/map/map?id=${id}`
    })
  
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KDPBZ-2MYL6-VPJSJ-E7ZAF-6CXYV-MJBEU'
    });

    qqmapsdk.search({
      keyword: '星巴克',
      address_format:'short',
      page_size: 20,
      success: (res) => {
        // console.log(res);
        const starbucksDoors = this.data.starbucksDoors
        // console.log(this)
        this.setData({
          starbucksDoors: res.data
        })
        
        for(let i =0;i<this.data.starbucksDoors.length;i++){
          // console.log(res.data[i]._distance);
        }
        
      },
      fail: function (res) {
        // console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }

    });

    qqmapsdk.calculateDistance({
      to: [{
        latitude: 28.689578,
        longitude: 115.89352755
      }],
      success: function (res) {
        // console.log(res);
      },
      fail: function (res) {
        // console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });

      // for(let i =0;i<10;i++){
      //   qqmapsdk.geocoder({
      //     address: '北京市海淀区彩和坊路海淀西大街74号',
      //     success: function (res) {
      //       console.log(res);
      //     },
      //     fail: function (res) {
      //       // console.log(res);
      //     },
      //     complete: function (res) {
      //       // console.log(res);
      //     }
      //   });
      // }
  

    
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