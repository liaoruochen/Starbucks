//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    picture:[
      {url:"/images/kv-bev.jpg"},
      {url:"/images/kv-dumpling.jpg"},
    ],
    newTitle:"星冰粽沁甜上市",
    newImage:"/images/wml.png",
    bzimg:'/images/kele.png',
    List:[
      {id:0,img:"/images/kv-bev.jpg",title:"这一刻夏天"},
      {id:1,img:"/images/a.png",title:"告白TA"},
      {id:2,img:"/images/kv-dumpling.jpg",title:"冰沁清甜夏天见"},
      {id:3,img:"/images/d.png",title:"勇敢爱"},
      {id:4,img:"/images/c.png",title:"加油"},
      {id:5,img:"/images/e.png",title:"放松片刻"},
      {id:6,img:"/images/f.png",title:"有你真好"},
      {id:7,img:"/images/b.png",title:"生快"},
    ]
  }
  ,
  shoppingCart(e){
    let id = e.currentTarget.dataset.id;
    console.log(id)
    // wx.navigateTo({
    //   url: '../../pages/shopping/shopping'
    // })
  }
  //事件处理函数
 
})
