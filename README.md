<!--
 * @Description: 使用文档
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2022-12-28 20:00:46
 * @LastEditors: wangfengxiang
-->
# 图片代码生成
## 概述
自动读取剪切板图片链接，自动获取图片尺寸，根据自定义模版补全信息，生成代码。

## 插件配置项参数
| 参数         | 说明                   |   类型   | 默认值|
|--------------|-----------------------|---------|------|
| template     | 代码模版               | String  |见默认模版|
| withProtocol | 图片链接是否保留协议     | Boolean |  false |

### 默认模版

```less
.size({width}px,{height}px);
.po-absolute;
top: 0;
left: 0;
background: url('{url}') no-repeat center / {width}px {height}px;
```
### 配置项示例
```json
"bgToCode": {
    "template": "background: url('{url}') no-repeat center / {width}px {height}px;",
    "withProtocol": false
}
```
### template模版参数
| 参数         | 说明                     | 类型   | 备注|
|--------------|-----------------------|---------|------|
| {width}      | 图片宽度                | Number  |     |
| {height}     | 图片高度                | Number  |     |
| {url}        | 图片链接                | String  |     |

## 使用

* 右键 - 生成背景图代码
* 快捷键（win: ctrl+g / mac: cmd+g）

