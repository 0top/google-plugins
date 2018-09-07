# google-plugins
clean csdn ads

***  
### 简介

一款针对csdn广告的google插件

***

原理：  
在doucement_start时候将js注入页面，用jquery自带的方法删除元素
直接删除元素:  $("aside").remove()   
根据id删除:    $("#id").remove()   
根据class删除：$(".class").remove()  

> 由于在document_start之后会执行一些js，导致如果使用start时期注入js会导致整个页面乱掉
> 所以选择将某段广告的div进行hide操作
> 相较一开始效果更好

***

>新版功能：
>在页面加载完毕后，自动展开阅读更多

***

详情:  
https://0top.github.io/

