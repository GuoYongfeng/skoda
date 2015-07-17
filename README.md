## log

### 2015-07-16 20:39

* gulp构建项目
* 目录搭建
* 对接口

## NOTE

* 修改：车和按钮的位置需要修改，不能左右的按钮挡住车
* 缺少：游戏结束后，需要有一个弹层来引导用户进入到结果页
* 缺少：被邀请人帮别人跑完全程时候看到的页面
* 待确定：
	* 方案1--选车颜色变化后车辆图片是否改变，则需要新增一个进入游戏的按钮
	* 方案2--选完颜色直接开始游戏
	* 方案3--考虑直接去掉这个页面，因为车辆的颜色对本项目意义不大
* 待确定：游戏页的效果，声音？障碍数？
* 测试版本：iOS6+ andriod4.4+

## 接口

### 公共
	* 微信分享需要的数据

### 开始页

### 车辆颜色选择页

### 游戏页
	* 策略：1s==400m
	* 页面载入时创建游戏 无需传值
	* 游戏结束后提交跑的距离M

### 游戏结果页1--自己完成游戏
	* 头像、昵称、跑完公里数、剩余公里数、占比、分享的数据

### 游戏结果页2--自己看到的未完成的状态
	* 头像、昵称、跑完公里数、剩余公里数、占比、分享的数据
	* 好友列表：头像、昵称、时间、公里数

### 游戏结果页3--自己游戏全部完成
	* 头像、昵称
	* 验证并提交手机号码
	* 返回数据：status、message

### 好友接力页面1--开始
	* （游戏发起人的）头像、昵称、跑完公里数、剩余公里数、占比、分享的数据
	* URL

### 好友接力页面2--看到别人已完成
	* URL

### 好友接力页面2--帮别人跑完
	* 缺失