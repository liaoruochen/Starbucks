// pages/map/map.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    starbuckslatitude:'',
    starbuckslongitude:'',
    markers: [],
    title: '',
    address: '',
    controls: [],
    hascheck: false,
    animationData: [],
    display:true,
    polyline: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    // console.log(id)

    qqmapsdk = new QQMapWX({
      key: 'KDPBZ-2MYL6-VPJSJ-E7ZAF-6CXYV-MJBEU'
    });

    qqmapsdk.search({
      keyword: '星巴克',
      address_format: 'short',
      page_size: 20,
      success: (res) => {
        // console.log(res)
        for (let i = 0; i < res.data.length; i++) {
          if (id == res.data[i].id) {
            this.setData({
              starbuckslatitude: res.data[i].location.lat,
              starbuckslongitude: res.data[i].location.lng,
              title: res.data[i].title,
              address: res.data[i].address,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              markers: [
                {
                  iconPath: "../../images/bj.png",
                  id: 0,
                  latitude: res.data[i].location.lat,
                  longitude: res.data[i].location.lng,
                  width: 32,
                  height: 38
                }
              ]
            })
          }

        }
      },
      fail: function (res) {
        // console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }

    });
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '../../images/mb.png',
            position: {
              left: res.windowWidth - 70,
              top: res.windowHeight / 1.25 - 40,
              width: 35,
              height: 35
            },
            clickable: true,
          }]
        })
      }
    })

    wx.request({

    })
  },

  controltap(e) {
    // console.log(e)
    var that = this
    wx.getLocation({
      type : 'gcj02',
      success: (res) => {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })

  },
  checkImg(e) {
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(400).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      hascheck: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 100)
  },
  back(e) {
    this.setData({
      hascheck: false,
    })
  },

  display(e) {
    wx.getLocation({
      type : 'gcj02',
      success: (res) => {
        // console.log(res.latitude);
        // console.log(res.longitude);
        const latitude = this.data.starbuckslatitude;
        const longitude = this.data.starbuckslongitude;
        // console.log(latitude);
        this.setData({
          polyline: [{
            points: [{
              longitude: this.data.starbuckslongitude,
              latitude: this.data.starbuckslatitude

            }, {
              longitude: res.longitude,
              latitude: res.latitude
            }],
            color: "#000000",
            width: 10,
            dottedLine: false,
          }],
          hascheck:false
        })
        const display =this.data.display;
        
        if(display){
          this.setData({
            display:false,
          })
        }else if(!display){
          this.setData({
            display:true,
            polyline:[]
          })
        }

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