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
    disabled:true,
    money:0,
    number:0,
    id:1,
    status:0,
    checkxx:true,
    scrolly:true,
    scrollx:true,
    goupic:'/images/gou.png'
    ,
    listPic:[],
    starbucksList:[],
    introduce:[
      {thetime:'2018.05.27-2021.05.26',
      themake:'一任意季节限定特饮（大杯）饮料券；一此电子饮料券自购买之日起三年内有效一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。'},
      {thetime:'2018.05.27-2021.05.26',themake:'一拿铁（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。'},
      {thetime:'2018.05.27-2018.11.05',themake:"一本券为冷萃冰咖啡（大杯）饮料券。冷萃冰咖啡为季节性饮品，且每日限量供应，具体以门店实际供应 f 清况为准；一此季节性饮品电子券的有效期为 2018 年 3 月 20 日起至 2018 年 11 月 5 日，有效期届满后该券即失效，原购买人只能根据（（星巴克用星说社交礼品平台须知 》 申请退货退款；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此季节性饮品电子券需一次性使用完毕，一经使用，即失效；一使用季节性饮品电子券在门店消费时，同时出示有效星享卡可累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一馥丙白（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一焦糖玛奇朵（大杯）饮料券；一此电子饮料券自购买之日起三年内有效；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）兑换其出售的指定商品；一此电子饮料券为一次性使用产品，一旦兑换，即失效；一使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一本券为绵云冷萃冰咖啡（大杯）饮料券。绵云冷萃冰咖啡（大杯）为季节性饮品，且每日限量供应，具体以门店实际供应情况为准；一此季节性饮品电子券的有效期为 2018 年 4 月 10 日起至 2018 年 11 月 5 日，有效期届满后该券即失效，原购买人只能根据（（星巴克用星说社交礼品平台须知 》 申请退货退款；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知》  ）兑换其出售的指定商品；一此季节性饮品电子券需一次性使用完毕，一经使用，即失效；一使用季节性饮品电子券在门店消费时，同时出示有效星室卡可累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。"},
      {thetime:'2018.05.27-2021.05.26',themake:"一电子星礼卡的有效期为激活（或末次充值，若适用）之日起三年；一您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见 《 星巴克用星说社交礼品平台须知 》 ）购买其出售的指定商品；一此电子星礼卡可多次使用，不可兑换现金，不找零；一使用电子星礼卡在门店消费时，同时出示有效星享卡累积星星。"},
    ]

  },
  showChoose(e){
    console.log(e)
    const id = e.currentTarget.dataset.id;
    const url = e.currentTarget.dataset.url;
    // console.log(e)
    this.setData({
      titlePic: url,
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
    // console.log(e)
    wx.request({
      url:'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      success:(res)=>{
        console.log(res)
        const imgnum = e.currentTarget.dataset.imgnum;
        // console.log(imgnum)
        const picimg = res.data.data.starbucksList[imgnum].url;
        const thename = res.data.data.starbucksList[imgnum].name;
        const price =Number(res.data.data.starbucksList[imgnum].price) ;

        const introduce =this.data.introduce;
        // console.log(introduce)
        const thetime = introduce[imgnum].thetime;
        const themake = introduce[imgnum].themake;
      
    
          this.setData({
          picimg:picimg,
          thename:thename,
          themoney:price,
          thetime:thetime,
          themake:themake
        })
      }
    })
    this.setData({
      checkxx:false,
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = options.page;
    wx.request({
      url:'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      success:(res)=>{
        console.log(res)
        const listPic =  res.data.data.listPic
        // console.log(listPic[page])
        this.setData({
          listPic:res.data.data.listPic[page].pagelist,
          starbucksList:res.data.data.starbucksList,
          titlePic:res.data.data.listPic[page].pagelist[0].url
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('111')
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