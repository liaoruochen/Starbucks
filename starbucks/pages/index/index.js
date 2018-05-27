//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picture:[
      {url:"/images/ff.jpg",page:"1"},
      {url:"/images/kv-dumpling.jpg",page:"8"},
    ],
    newTitle:"星冰粽沁甜上市",
    newImage:"/images/wml.png",
    bzimg:'/images/kele.png',
    List:[]
  }
  ,
  shoppingCart(e){
    let page = e.currentTarget.dataset.page;
    // console.log(page)
    wx.navigateTo({
      url:`/pages/shopping/shopping?page=${page}`
    })

  },
  imageto(e){
    let page = e.currentTarget.dataset.page;
    if(page=="8"){
      wx.navigateTo({
        url:"/pages/push/push?page"
      })
  
    }
    wx.navigateTo({
      url:`/pages/shopping/shopping?page=${page}`
    })

   
  },
  buttonTo(e){
    wx.navigateTo({
      url:`/pages/push/push`
    })
  },
  onReady:function(){
    wx.request({
      url:'https://www.easy-mock.com/mock/5adecfefc57e6f08ff16594b/example/starbucks',
      success:(res)=>{
        // console.log(res)
        this.setData({
          List:res.data.data.List
        })
      }
    })

  }
  //事件处理函数
 
})
