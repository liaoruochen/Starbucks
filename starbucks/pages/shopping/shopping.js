// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titlePic:"/images/a.png",
    addNum:'/images/add.png',
    delNum:'/images/jian.png',
    id:1,
    goupic:'/images/gou.png'
    ,
    listPic:[
      {url:'/images/a.png',id:1,},
      {url:'/images/b.png',id:2,},
      {url:'/images/c.png',id:3,},
      {url:'/images/d.png',id:4,},
      {url:'/images/e.png',id:5,},
      {url:'/images/f.png',id:6,},
    ],
    starbucksList:[
      {url:'/images/g.png',name:"当季特饮",price:"40"},
      {url:'/images/g.png',name:"拿铁",price:"31"},
      {url:'/images/g.png',name:"冷萃冰咖啡",price:"36"},
      {url:'/images/g.png',name:"星礼卡",price:"50"},
      {url:'/images/g.png',name:"星礼卡",price:"100"},
      {url:'/images/g.png',name:"馥芮白",price:"36"},
      {url:'/images/g.png',name:"焦糖玛奇朵",price:"35"},
      {url:'/images/g.png',name:"绵云冷萃",price:"42"},
      {url:'/images/g.png',name:"星礼卡",price:"200"},
      {url:'/images/g.png',name:"星礼卡",price:"288"},
      {url:'/images/g.png',name:"星礼卡",price:"520"},
     
      
    ],

  },
  showChoose(e){
    // console.log(e)
    const id = e.currentTarget.dataset.id;
    const url = e.currentTarget.dataset.url;
    console.log(e)
    this.setData({
      titlePic: url,
      id:id

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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