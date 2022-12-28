"use strict";
/*
 * @Description: 插件入口文件
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2022-12-28 10:25:17
 * @LastEditors: wangfengxiang
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "bgtocode" is now active!');
    let disposable = vscode.commands.registerCommand('bgtocode.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from bgtocode!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// export function deactivate() {}
//# sourceMappingURL=extension.js.map