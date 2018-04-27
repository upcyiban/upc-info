## 如何获取易班的vq
    对于一个轻应用的首页再首页中引入HeaderSection组件
    来定制标签，获取vq等功能，对于如下代码

```html
        <header-section
            title="中国石油大学二手市场物品交易社区"
            :yibanAuth="yibanAuth"
        >
            <p>中国石油大学二手市场物品交易社区</p>
        </header-section>
```
    其中三个参数title，yibanAuth，slot中title描述
    标签名称，slot可以传入顶部导航栏组件，yibanAuth
    是类YibanAuth的实例，如下是yibanAuth的代码实例
```javascript
    import {YibanAuth} from "../../../common/util/getYibanData"
    import vqUrl from "../config/index"
    const yibanAuth = new YibanAuth(vqUrl)

    export default yibanAuth
```
