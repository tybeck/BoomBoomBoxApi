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
const Pin0 = new Gpio(0, "high");
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
const Pin1 = new Gpio(1, "high");
const Pin12 = new Gpio(12, "high");
const Pin16 = new Gpio(16, "high");
const Pin20 = new Gpio(20, "high");
const Pin21 = new Gpio(21, "high");

interface Pin {
  write: (pin: number) => Promise<boolean>;
  writeSync: (pin: number) => void;
}

@Injectable()
export class PinService {
  pins: { [key: number]: Pin } = {
    2: Pin2,
    3: Pin3,
    4: Pin4,
    17: Pin17,
    27: Pin27,
    22: Pin22,
    10: Pin10,
    9: Pin9,
    11: Pin11,
    0: Pin0,
    5: Pin5,
    6: Pin6,
    13: Pin13,
    19: Pin19,
    26: Pin26,
    14: Pin14,
    15: Pin15,
    18: Pin18,
    23: Pin23,
    24: Pin24,
    25: Pin25,
    8: Pin8,
    7: Pin7,
    1: Pin1,
    12: Pin12,
    16: Pin16,
    20: Pin20,
    21: Pin21,
  };

  constructor() {}

  public async fire(pin: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.pins[pin].write(0).then(() => {
          setTimeout(() => {
            this.pins[pin].writeSync(1);
            resolve();
          }, 1000);
        });
      }, 100);
    });
  }
}
