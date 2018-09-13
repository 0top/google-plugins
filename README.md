# google-plugins
clean csdn ads

 
### 简介

一款针对csdn广告的google插件


### 原理：  

###### 1.js注入

>使用google插件可以在页面加载生命周期时向页面注入  
我们可以doucement\_start/document\_end时候将js注入页面  

###### 2.删除或者隐藏

>用jquery自带的方法删除元素
直接删除元素:  $("aside").remove()   
根据id删除:    $("#id").remove()   
根据class删除：$(".class").remove()  
或者用： $("#id").hide()

###### 3.不同时期注入

>由于在document_start之后会执行一些js  
导致如果使用start时期注入js会导致整个页面乱掉 
所以选择将某段广告的div进行hide操作  
相较一开始效果更好



### 新版功能：

在页面加载完毕后，自动展开阅读更多(done)

将页面底部推荐广告删掉  
由于底部推荐广告为增量更新  
所以需要注入后使用站内方法，之后有时间会去看


### 详情:
  
[https://0top.github.io/](https://0top.github.io/ "博客地址")

