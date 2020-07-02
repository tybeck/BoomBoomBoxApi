import { Injectable } from "@nestjs/common";

const { Gpio } = require("onoff");
const Pin = new Gpio(2, "out");

@Injectable()
export class AppService {
  constructor() {}

  public async beginSequence() {
    Pin.writeSync(1);
    return new Promise(resolve => {
      setTimeout(() => {
        Pin.writeSync(0);
        setTimeout(() => {
          Pin.writeSync(1);
          resolve();
        }, 1500);
      }, 100);
    });
  }
}
