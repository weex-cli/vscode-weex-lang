import * as http from 'http';
import { env } from 'vscode';

export function sendLog () {
  http.get(`http://gm.mmstat.com/esc.main.vscode-weex-lang?mid=${env.machineId}&t=${Date.now()}`);
}