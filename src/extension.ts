/*
 * @Description: 插件入口文件
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2023-01-10 15:27:25
 * @LastEditors: wangfengxiang
 */
import generateBgcode from "./generateBgcode";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const toUploadImg = vscode.commands.registerCommand("uploadimg", async () => {
    vscode.window.showInformationMessage("代码生成成功！");
  });

  context.subscriptions.push(generateBgcode);
  context.subscriptions.push(toUploadImg);
}
