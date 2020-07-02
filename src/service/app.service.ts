import { Injectable } from "@nestjs/common";

const { Gpio } = require("onoff");
const Pin = new Gpio(2, "high");

@Injectable()
export class AppService {
  constructor() {}

  public async beginSequence() {
    return new Promise(resolve => {
      setTimeout(() => {
        Pin
          .write(1)
          .then(() => {
            setTimeout(() => {
              Pin.writeSync(0);
              resolve();
            }, 1000);
          });
      }, 100);
    });
  }
}
