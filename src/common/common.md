## common文件夹
### createFetchWithAuth函数
>   参数:
        backEndUrl : 后端地址
        vqUrl : o.yiban.cn文档中获取vq的Url一般形式如下：
        appName : 轻应用名称
        device : 未知意义的易班参数，暂时取值mobile
```
  //vqUrl的形式
  const vqUrl = `https://openapi.yiban.cn/oauth/authorize?client_id=${appId}&redirect_uri=${backUrl}`
```
>   返回值：
        返回一个轻应用唯一的对象
        返回值是一个拥有httpRequest属性和yibanAuth属性的对象
        httpRequest对象: 绑定特定轻应用后端的HttpRequest,提交请求时无须考虑是否有token
        yibanAuth对象: 绑定特定轻应用后端yiban认证对象，其中fetchVq方法会被fetchVq混入模式主动使用，其中refreshToken方法会被httpRequest属性主动使用<br /><br />
        如果httpRequest.yibanAuth为null那么就不会主动刷新token，而createFetchWithAuth函数保证了返回的httpRequest对象是拥有yibanAuth属性的
### CompressImage函数
>   参数:
        file : 从input标签获取的文件
        iframeDocument : 用来创建canvas的document/iframeDocument
        compressOptions : 压缩选项(为一个Object)
        ```
        {
            compress: boolean                       //默认true 由UploadFile决定
            maxWidth: int                           //默认1024
            maxHeight: int                          //默认1024
            compressRatio: float between (0,1)      //压缩比率 默认0.9 太低可能会糊
        }
        ```
>   返回值
        Promise对象, resolve压缩后的图片(Blob)

### UploadFile类
>   构造函数的入参是一个httpRequest对象，推荐使用createFetchWithAuth函数的返回值
    第二个入参filePrefix是资源服务器的后端地址一般不传
    第三个入参uploadUrl无须使用，但是想要使用除了/upload/file接口以外的其他接口的话需要将其设置为该接口
    要保证该接口正确时的返回值类型为
```
{
//如果使用第三个参数像其他的后端提交文件需要保证
//后端返回数据有data属性，并且filePrefix+data是完整的文件地址
    data : "file\image\1525297652685.png"
}
```
#### mixins文件夹
>   存放全局的混入模式,其中components/**/mixins存放局部的混入模式
>>  fetchVq : 使用改混入模式的组件可以自动获取vq并且获取token <br /><br />
      loading : 使用改混入模式的组件可以搭配使用LoadImage组件或者自行编写LoadImage类似的组件实现‘提交XHR请求过程中引入动态加载图’的功能
      更详细的使用方法在loading.md<br /><br />
      UpdateData : 使用混入模式的组件将拥有updateData函数，该函数的入参是一个拥有key和value属性的对象执行后可以更新该组件的data数据
#### components文件夹
>   存放全局的公共组件
>>  HeaderSection : 不解释
    LoadImage : 不解释
#### util文件夹
>   getRequest : 获取URl中?后面的参数，非特殊需求基本无需使用
    getYibanData : 已经有fetchVq混入模式封装好，若无BUG无须使用修改
    HttpRequest : 全局提交XHR请求的工具类，只需在构造器中传入后端地址，已经有createFetchWithAuth函数封装好，无须直接使用
    Token : 获取token的工具类，getYibanData已经封装好无须使用


