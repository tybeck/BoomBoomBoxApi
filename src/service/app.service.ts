import { Injectable } from "@nestjs/common";

const { Gpio } = require("onoff");
const Pin = new Gpio(2, "high");

@Injectable()
export class AppService {
  constructor() {}

  public async beginSequence() {
    Pin.writeSync(1);
    return new Promise(resolve => {
      setTimeout(() => {
        Pin
          .write(0)
          .then(() => {
            setTimeout(() => {
              Pin.writeSync(1);
              resolve();
            }, 1000);
          });
      }, 100);
    });
  }
}
