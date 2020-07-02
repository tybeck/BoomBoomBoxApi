import { Injectable } from "@nestjs/common";

const { Gpio } = require("onoff");
const Pin = new Gpio(2, "out");

@Injectable()
export class AppService {
  constructor() {}

  public async beginSequence() {
    Pin.writeSync(0);
  }
}
