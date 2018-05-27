// pages/shopping/shopping.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titlePic:"",
    addNum:'/images/add.png',
    delNum:'/images/jian.png',
    delNum1:'/images/jjjjj.png',
    disabled:true,
    money:0,
    number:0,
    id:1,
    status:0,
    goupic:'/images/gou.png'
    ,
    listPic:[],
    starbucksList:[
      {
        url: "/images/c1.png",
        name: "冰尚星冰粽",
        price: 198,
        status: 0,
        num: 0
      },
      {
        url: "/images/c2.png",
        name: "冰逸星冰粽",
        price: 198,
        status: 0,
        num: 0
      },
    ],

  },
  showChoose(e){
    // console.log(e)
    const id = e.currentTarget.dataset.id;
    const url = e.currentTarget.dataset.url;
    // console.log(e)
    this.setData({
      // titlePic: url,
      id:id

    })
  },

  addNumber(e){

    let money = this.data.money;
    

    let number = this.data.number;
    const index = e.currentTarget.dataset.index;
    const status = e.currentTarget.dataset.status;
    let price = Number(this.data.starbucksList[index].price);
    let starbucksList = this.data.starbucksList;
    let num = Number(this.data.starbucksList[index].num) ;
    num++;
    number++;
    this.data.starbucksList[index].num=num
    money+=price
   
    // console.log(this.data.starbucksList[index].num)
    // starbucksList
    
    this.setData({
      status,
      starbucksList,
      number,
      money:money
    })
    this.hasNumber();
    // console.log(starbucksList)
  },
  delNumber(e){
    let money = this.data.money;
    let number = this.data.number;
    const index = e.currentTarget.dataset.index;
    const status = e.currentTarget.dataset.status;
    let price = this.data.starbucksList[index].price;
    let starbucksList = this.data.starbucksList;
    let num = this.data.starbucksList[index].num;
    num--;
    number--;
    this.data.starbucksList[index].num=num
    money= money-price
    
    // console.log(this.data.starbucksList[index].num)
    // starbucksList  
    this.setData({
      status,
      starbucksList,
      number,
      money:money

    })
    this.hasNumber();
  },
  hasNumber(){
    const disabled = this.data.disabled;
    let number = this.data.number
    if(number===0){
      this.setData({
        disabled:true,
        // addNum:'/images/add.png',
      })
    }else if(number!=0){
      this.setData({
        disabled:false,
        // addNum:'/images/jjjjj.png',
      })
    }
  },
  buySomething(e){
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = options.page;
    
    wx.request({
      url:'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      success:(res)=>{
        console.log(res.data.data.listPic[8])
        
        this.setData({
          listPic:res.data.data.listPic[8].pagelist,
          // starbucksList:res.data.data.starbucksList,
          titlePic:"/images/shouye.png"
        })
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
  
  },
})