import { Injectable } from "@nestjs/common";

const { Gpio } = require("onoff");
const Pin2 = new Gpio(2, "high");
const Pin3 = new Gpio(3, "high");
const Pin4 = new Gpio(4, "high");
const Pin17 = new Gpio(17, "high");
const Pin27 = new Gpio(27, "high");
const Pin22 = new Gpio(22, "high");
const Pin10 = new Gpio(10, "high");
const Pin9 = new Gpio(9, "high");
const Pin11 = new Gpio(11, "high");
const Pin5 = new Gpio(5, "high");
const Pin6 = new Gpio(6, "high");
const Pin13 = new Gpio(13, "high");
const Pin19 = new Gpio(19, "high");
const Pin26 = new Gpio(26, "high");
const Pin14 = new Gpio(14, "high");
const Pin15 = new Gpio(15, "high");
const Pin18 = new Gpio(18, "high");
const Pin23 = new Gpio(23, "high");
const Pin24 = new Gpio(24, "high");
const Pin25 = new Gpio(25, "high");
const Pin8 = new Gpio(8, "high");
const Pin7 = new Gpio(7, "high");
const Pin12 = new Gpio(12, "high");
const Pin16 = new Gpio(16, "high");
const Pin20 = new Gpio(20, "high");
const Pin21 = new Gpio(21, "high");

@Injectable()
export class AppService {
  constructor() {}

  public async beginSequence() {
    return Promise.all([
      this.startPinSequence(Pin2),
      this.startPinSequence(Pin3),
      this.startPinSequence(Pin4),
      this.startPinSequence(Pin17),
      this.startPinSequence(Pin27),
      this.startPinSequence(Pin22),
      this.startPinSequence(Pin10),
      this.startPinSequence(Pin9),
      this.startPinSequence(Pin11),
      this.startPinSequence(Pin5),
      this.startPinSequence(Pin6),
      this.startPinSequence(Pin13),
      this.startPinSequence(Pin19),
      this.startPinSequence(Pin26),
      this.startPinSequence(Pin14),
      this.startPinSequence(Pin15),
      this.startPinSequence(Pin18),
      this.startPinSequence(Pin23),
      this.startPinSequence(Pin24),
      this.startPinSequence(Pin25),
      this.startPinSequence(Pin8),
      this.startPinSequence(Pin7),
      this.startPinSequence(Pin12),
      this.startPinSequence(Pin16),
      this.startPinSequence(Pin20),
      this.startPinSequence(Pin21),
    ]);
  }

  public async startPinSequence(pin: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        pin.write(0).then(() => {
          setTimeout(() => {
            pin.writeSync(1);
            resolve();
          }, 1000);
        });
      }, 100);
    });
  }
}
