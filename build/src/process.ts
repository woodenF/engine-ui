import { spawn } from 'child_process'
import chalk from 'chalk'
import consola from 'consola'
import { projRoot } from './paths'

export const run = async (command: string, cwd: string = projRoot) => {
  return new Promise((resolve) => {
    // 将命令分割 例如：rm -rf 分割为['rm', '-rf'],进行解构[cmd,...args]
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
        cwd,
        stdio:"inherit",
        shell:true  // 默认情况下 linux才支持 rm -rf  windows安装git bash
    });
    // 在进程已结束并且子进程的标准输入输出流已关闭之后，则触发 'close' 事件
    app.on('close',resolve)  // 
  });
};
