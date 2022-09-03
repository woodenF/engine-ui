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