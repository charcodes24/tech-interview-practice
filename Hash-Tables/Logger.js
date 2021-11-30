class Logger {
  constructor() {
    this.map = new Map();
  }

  shouldPrintMessage(timestamp, message) {
    if (!this.map.has(message)) {
      this.map.set(message, timestamp);
      return true;
    }
    const prevTime = this.map.get(message);
    if (timestamp < prevTime + 10) return false;
    this.map.set(message, timestamp);
    return true;
  }
}

const Logger = function () {
  this.seen = new Map();
};

Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.seen.has(message) && timestamp - this.seen.get(message) < 10)
    return false;
  this.seen.set(message, timestamp);
  return true;
};

