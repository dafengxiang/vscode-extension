/*
 * @Description: 插件入口文件
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2022-12-28 10:25:17
 * @LastEditors: wangfengxiang
 */

import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bgtocode" is now active!');
	let disposable = vscode.commands.registerCommand('bgtocode.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from bgtocode!');
	});

	context.subscriptions.push(disposable);
}

// export function deactivate() {}
