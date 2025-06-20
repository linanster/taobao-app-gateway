import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = process.env.MSG || 'Hello,World!';
    const logLine = `[${new Date().toISOString()}] getHello called: ${msg}\n`;
    console.log(logLine);
    fs.appendFileSync(`${process.cwd()}/logs/log.txt`, logLine);
    return msg;
  }
}
