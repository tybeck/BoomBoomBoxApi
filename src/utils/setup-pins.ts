const { Gpio } = require("onoff");
const Pin = new Gpio(2, "out", null, {activeLow: true});

export default function() {
  Pin.writeSync(0);
}
