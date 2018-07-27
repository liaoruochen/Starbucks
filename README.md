# Starbucks
模仿星巴克用心说小程序

## 联系方式
QQ : 920037556

微信 : love920037556


## 小程序详解

### 主页效果

![](https://user-gold-cdn.xitu.io/2018/6/8/163df2474f8fa133?w=443&h=960&f=gif&s=4530504)
主页东西不多，主要是布局问题。顶层一个轮播图([swiper](http://www.swiper.com.cn/demo/index.html))。底部是一个用wx:for循环的一个列表。结构布局用的是浮动。用nth选择一个左浮动，另一个右浮动，并设置左右间距

- 浮动css

```
.starbucks-list:nth-child(n){
  float: left;
  margin-left: 40rpx;
}
.starbucks-list:nth-child(2n){
  float: right;
  margin-left: 0;
  margin-right: 40rpx;
}
```

### 接下来将详细讲一下几个功能
---
- **scroll-x及图片的切换**

![](https://user-gold-cdn.xitu.io/2018/6/8/163df5d87ab20c4a?w=884&h=775&f=gif&s=4087656)

    说到这里不得不吐槽一些小程序开发者工具
    也可能是电脑的问题在电脑上开发者工具的scroll-x无效，真机上正常使用，
讲一下图片的切换：我在每一个图片上都有绑定一个id，当点击图片是做一个判断出你点击的id是否与你绑定的id相等,判断为真时，进行数据的交替。图片的边框则是做一个三元运算符判断，以及右上角的叉叉。(不得不说数据绑定是一个好东西)。

代码如下

**wxml**
``` 
    <scroll-view scroll-x="{{scrollx}}" class="list-pic">
        <view class="picture" wx:for="{{listPic}}" wx:key="{{index}}">
            <image class="{{id==item.id?'check':''}}" data-id="{{item.id}}" data-url="{{item.url}}" src="{{item.url}}" bindtap="showChoose"
            />
            <image wx:if="{{id==item.id}}" class="goupic" data-id="{{item.id}}" src="{{goupic}}" />
        </view>
    </scroll-view>
```
**js**
```
  showChoose(e){
    const id = e.currentTarget.dataset.id;
    const url = e.currentTarget.dataset.url;
    // console.log(e)
    this.setData({
      titlePic: url,
      id:id
    })
  }
```
---
- **购物列表的制作以及购物历史**

效果图

![](https://user-gold-cdn.xitu.io/2018/6/8/163df77203625db7?w=443&h=960&f=gif&s=2126386)

购物车选择商品和上面图片的切换其实大同小异，绑定一个值，判断你点击的是那一个商品，在把当前商品的数据改变，只需要判断一下
```
wx:if="{{item.num!=0 }}"
```
就可以实现当数量为0时，减号与数量同时消失。

是不是很简单呢？结构代码如下：
```
 <view class="starbucks-list" wx:for="{{starbucksList}}" wx:key="{{index}}">
        <image bindtap="checkDrink" data-imgnum="{{item.imgnum}}" class="drinkImg" src="{{item.url}}" />
        <text class="description">{{item.name}}</text>
        <text class="price">￥{{item.price}}</text>

        <view class="addNum" bindtap="addNumber" data-index="{{index}}" data-status="{{item.status}}">

            <image wx:if="{{item.num!=0}}" src="{{delNum1}}" />
            <image wx:else="" src="{{addNum}}" />
        </view>
        <view wx:if="{{item.num!=0 }}" data-index="{{index}}" class="delNum {{item.num==0?'out':''}}" bindtap="delNumber"
            data-status="{{item.status}}">
            <image src="{{delNum}}" />
        </view>

        <text wx:if="{{item.num!=0 }}" class="listNum {{item.num==0?'out':''}}">{{starbucksList[index].num}}</text>

        <view wx:if="{{item.num!=0 }}" class="xiabiao {{item.num==0?'out':''}}"></view>
    </view>

```


但是其中也有一个难点困恼了我很久很久，就是关于[Storage](https://blog.csdn.net/u014360817/article/details/52704328)，因为购买成功之后需要把购买历史保存在本地，刚开始我的想法是把点击每个加号时，把点击的商品的下标作为一个key，然后把一些信息存储进去。这样每个key都是动态的，我们只要在下一个页面找到这个key,就可以获取到数据。但是，由于页面的跳转，我想了很多种办法都没法在历史界面找到之前点击商品的下标。于是放弃了(有解决方法的小伙伴可以私聊我)。

此路不通还得另辟蹊径，于是我想到了用数组来解决，用一个数组每个商品都默认占一个位置。以下标为记号，根据每点击商品的下标从而push进数组中。然后bug就来了，当你有没选的商品时，数组帮你占的位置默认undefined,但是你在历史中用wx:for循环该数组时undefined也会占一个格子，导致你的wxml会出问题。解决方案是用数组的split()方法 把为空的消去。
```
 onLoad: function (options) {
    const historyList = this.data.historyList
    var that = this
    wx.getStorage({
      //获取数据的key
      key: "key",
      success: function (res) {
        // console.log(res)
        for (let i = 0; i < res.data.length; i++) {
          historyList[i] = res.data[i]
        }
        for (let i = 0; i < historyList.length; i++) {
          if (historyList[i] == null) {
            historyList.splice(i, 1);
            i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
            // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
            // console.log(historyList);
          }
        }
       
        that.setData({
          historyList,
          hasHistory:true,
        })       
      
      }
    })
```
---

- **商品详情界面**
![](https://user-gold-cdn.xitu.io/2018/6/8/163dd62fee138e9f?w=443&h=960&f=gif&s=1738346)

---
- **门店详情以及地图组件**

![](https://user-gold-cdn.xitu.io/2018/6/9/163e061c9c7fef49)
门店列表是使用了[腾讯地图api](http://lbs.qq.com/qqmap_wx_jssdk/index.html)

地图api是一个蛮实用的组件，这里用到了关键字搜索(search)接口，直接查询了附近星巴克的门店，里面还可以选择长地址和短地址，基本上你要的数据都有，还是比较方便的。必须安利一波。

```
 qqmapsdk.search({
      keyword: '星巴克',
      address_format: 'short',
      page_size: 20,
      success: (res) => {
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
```

---


![](https://user-gold-cdn.xitu.io/2018/6/9/163e093dc200acac?w=443&h=960&f=gif&s=3366953)
关于地图上弹出层，本以为简简单单的用一个wx:if在加上一个fixed就可以解决的，在开发工具中显示的好好的，一用真机测试就傻眼了，我的弹出层呢？仔细去查看文档才发现地图的层级是最高的，不能有东西覆盖。在查看文档后发现了cover-view。可以凌驾于地图之上的盒子

弹出层动画是一个animation组件然后自己弄的的一个动画效果
```
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
```

---
## 小结
这个小程序还有蛮多功能并没有实现，也有一些bug还没有解决，比如两地的规划线路**polyline**不应该为一条笔直的直线，还有街景等等一些功能需要去完善，细节才能决定成败，还是得不断去完善一些细节，才能做出好的作品，这个小程序我还会去不断的完善它，喜欢的话可以关注我，我们可以一起交流学习，也希望可以给我提出一些宝贵的意见
