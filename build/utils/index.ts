import { spawn } from 'child_process';
import { projectRoot } from './paths';

export const withTaskName = <T>(name: string, fn: T) => {
  return Object.assign(fn as any, { displayName: name });
}

export const run = async (command: string) => {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    });
    app.on('close', resolve);
  })
}

// 重写打包后的@w-plus 路径
export const pathRewriter = (format) => {
  return (id: string) => {
    id = id.replaceAll("@engine-ui", `engine-ui/${format}`);
    return id;
  };
};
