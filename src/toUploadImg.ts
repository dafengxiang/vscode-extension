/*
 * @Description:
 * @Author: wangfengxiang
 * @Date: 2023-01-10 15:40:05
 * @LastEditTime: 2023-01-10 19:23:10
 * @LastEditors: wangfengxiang
 */
import * as vscode from "vscode";
import * as fs from 'fs'

const toUploadImg = vscode.commands.registerCommand("uploadimg", async () => {console.log(222);
    const uri = await vscode.window.showOpenDialog({
        canSelectFolders: false,
        canSelectMany: false,
        filters: {
          images: ['png', 'jpg','apng','jpeg','gif','webp'],
        },
      }); 
      //@ts-ignore
      let imgBuffer =  fs.readFileSync(uri[0].path);
      console.log('uri:111999999999 ');
  vscode.window.showInformationMessage("代码生成成功！",imgBuffer);
});
export default toUploadImg;
