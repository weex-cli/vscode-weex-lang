import * as http from 'http';
import { env } from 'vscode';

export function sendLog () {
  if (process.env['VSCODE_DEV']) {
    return;
  }
  http.get(`http://gm.mmstat.com/esc.main.vscode-weex-lang?mid=${env.machineId}&t=${Date.now()}`);
}