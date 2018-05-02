## 为项目引入加载中的动态图
#### 原理解析
loading函数的入参是一个httpRequest，
httpRequest是没有加载中的动态图功能
的，loading函数为提交请求前和提交请
求后添加了监听事件
提交之前不显示图片，提交之后显示图片
```js
    fetchListen(httpRequest ,
        () => this.showLoading = true ,
        () => this.showLoading = false
    )
```

#### 如何使用

loading的返回值是一个混入模式的对象
vue的组件复用方式是使用一个混入模式
如果loading 的入参是一个httpRequest
属性，那么使用loading混入的vue组件
就会拥有data.fetch的属性使用该属性
的所有请求都拥有加载中动图的功能

```html
export default {
    name: 'PublishPage',
    //使用这个混入模式，入参为marketFetch
    mixins: [loading(marketFetch)],
    created() {
    //提交请求
        this.fetch.getJsonData('/secondhand/browse/allkind')
            .then(json => {
                this.classesList = json.map(item => {
                    return item.name
                })
            })
    },
}
```
