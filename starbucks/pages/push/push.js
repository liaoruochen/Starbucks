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
    picimg:'',
    thename:'',
    themoney:'',
    thetime:'',
    themake:'',
    checkxx:true,
    disabled:true,
    scrolly:true,
    scrollx:true,
    money:0,
    number:0,
    id:1,
    status:0,
    goupic:'/images/gou.png'
    ,
    listPic:[],
    starbucksList:[
      {
        imgnum:0,
        url: "/images/c1.png",
        name: "冰尚星冰粽",
        price: 198,
        status: 0,
        num: 0
      },
      {
        imgnum:1,
        url: "/images/c2.png",
        name: "冰逸星冰粽",
        price: 198,
        status: 0,
        num: 0
      },
    ],
    introduce:[
      {thetime:'2018.05.27-2018.06.15',themake:"一本券为星冰粽冰尚款礼袋电子兑换券，凭券可兑领一份星冰粽冰尚款礼袋（含 10 颗星冰粽及 1 个冰尚礼袋）。请您在 2018 年 6 月 15 日前完成预约，并在预约的提领日期前往预约的星巴克门店完成领取；一预约方式和操作请点击本券的“预约领取门店”页面查询。请您至少在领取前提前 1 天进行预约（江浙沪地区需提前 2 天）。若您未在预约的提领日期前往预约门店领取产品，您需要重新预约；一本券为提领指定产品的唯一提领凭证，兑领时请向门店咖啡师出示本券。未进行预约的，请恕门店不接受提领产品；一本券的有效期为购买之日起至 2018 年 6 月 15 日，有效期届满后该券即失效，原购买人只能根据 《 星巴克用星说社交礼品平台须知 》 的规定申请退款;"},
      {thetime:'2018.05.27-2018.06.15',themake:"一本券为星冰粽冰逸款礼袋电子兑换券，凭券可兑领一份星冰粽冰逸款礼袋（含 10 颗星冰粽及 1 个冰逸礼袋）。请您在 2018 年 6 月 15 日前完成预约，并在预约的提领日期前往预约的星巴克门店完成领取；一预约方式和操作请点击本券的“预约领取门店”页面查询。请您至少在领取前提前 1 天进行预约（江浙沪地区需提前 2 天）。若您未在预约的提领日期前往预约门店领取产品，您需要重新预约；一本券为提领指定产品的唯一提领凭证，兑领时请向门店咖啡师出示本券。未进行预约的，请恕门店不接受提领产品；一本券的有效期为购买之日起至 2018 年 6 月 15 日，有效期届满后该券即失效，原购买人只能根据 《 星巴克用星说社交礼品平台须知 》 的规定申请退款；"},
    ]

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
    setTimeout(function(){
      wx.navigateTo({
        url:"../history/history"
      })
    },1500)
  },
  checkDrink(e){
    console.log(e)
    let imgnum = e.currentTarget.dataset.imgnum
    const introduce = this.data.introduce;
  
    // console.log(introduce)
    this.setData({
      checkxx:false,
      thetime:introduce[imgnum].thetime,
      themake:introduce[imgnum].themake ,
      themoney:e.currentTarget.dataset.price,
      picimg:e.currentTarget.dataset.url,
      thename:e.currentTarget.dataset.name,
      scrolly:false,
      scrollx:false,

   
    })
  },
  chaxx(e){
    this.setData({
      checkxx:true,
      picimg:'',
      thename:'',
      themoney:'',
      thetime:'',
      themake:'',
      scrolly:true,
      scrollx:true,
    })
  },
  moredoors(e){
    // console.log('111')
    wx.navigateTo({
      url:'../../pages/moredoors/moredoors'
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
        // console.log(res.data.data.listPic[8])
        
        
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