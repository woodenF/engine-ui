import { spawn } from 'child_process';
import { projRoot } from './paths';

export const run = async (command: string, cwd: string = projRoot) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ');
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: true
    });
    app.on('close', resolve);
  });
};
