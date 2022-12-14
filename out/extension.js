"use strict";
/*
 * @Description: 插件入口文件
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2022-12-28 18:21:33
 * @LastEditors: wangfengxiang
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
//@ts-ignore
const cp = require("copy-paste");
const jimp_1 = require("jimp");
function activate(context) {
    const disposable = vscode.commands.registerCommand("bgtocode", async () => {
        // 读取剪切板图片链接
        let url = cp.paste();
        const reg = /(https?:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(jpeg)|(gif)|(webp)))/gi;
        url.startsWith("//") && (url = "https:" + url);
        // 校验链接合法性
        if (!reg.test(url)) {
            return vscode.window.showErrorMessage("复制非图片链接！！！");
        }
        else {
            vscode.window.showInformationMessage("代码生成中。。。");
        }
        // 获取图片宽高
        const instance = await (0, jimp_1.read)({ url }), width = instance.getWidth(), height = instance.getHeight();
        // 模版处理
        const template = vscode.workspace.getConfiguration("bgToCode")?.template ??
            `
        .size({width}px,{height}px);
        .po-absolute;
        top: 0;
        left: 0;
        background: url('{url}') no-repeat center / {width}px {height}px;`, withProtocol = vscode.workspace.getConfiguration("bgToCode")?.withProtocol ?? false;
        if (!withProtocol) {
            url = "//" + url.split("://")[1];
        }
        const insertTemplate = template
            .replace(/\{width\}/gi, width)
            .replace(/\{height\}/gi, height)
            .replace(/\{url\}/gi, url);
        // 写入
        const editor = vscode.window.activeTextEditor;
        editor?.edit((editorBuilder) => {
            editorBuilder.insert(editor.selection.active, insertTemplate);
        });
        vscode.window.showInformationMessage("代码生成成功！");
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map