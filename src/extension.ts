/*
 * @Description: 插件入口文件
 * @Author: wangfengxiang
 * @Date: 2022-12-28 10:22:02
 * @LastEditTime: 2023-01-10 15:42:35
 * @LastEditors: wangfengxiang
 */
import * as vscode from "vscode";
import generateBgcode from "./generateBgcode";
import toUploadImg from './toUploadImg'

export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(generateBgcode);
  context.subscriptions.push(toUploadImg);
}
