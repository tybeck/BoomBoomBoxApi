const { Gpio } = require("onoff");
const Pin = new Gpio(2, "out");

export default function() {
  Pin.writeSync(1);
}
