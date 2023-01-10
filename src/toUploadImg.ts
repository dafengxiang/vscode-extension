/*
 * @Description:
 * @Author: wangfengxiang
 * @Date: 2023-01-10 15:40:05
 * @LastEditTime: 2023-01-10 16:15:06
 * @LastEditors: wangfengxiang
 */
import * as vscode from "vscode";
const toUploadImg = vscode.commands.registerCommand("uploadimg", async () => {
    const uri = await vscode.window.showOpenDialog({
        canSelectFolders: false,
        canSelectMany: false,
        filters: {
          images: ['png', 'jpg','apng','jpeg','gif','webp'],
        },
      }); 

      console.log('uri: ', uri);
  vscode.window.showInformationMessage("代码生成成功！");
});
export default toUploadImg;
