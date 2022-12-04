class BrowserLog {
  constructor(logOn) {
    this.logOn = logOn;
  }
  log(args) {
    if (this.logOn) {
      console.log(...args);
    }
  }

  logGroup(args) {
    if (this.logOn) {
      console.group(...args);
    }
  }

  logGroupEnd() {
    if (this.logOn) {
      console.groupEnd();
    }
  }
}

export default BrowserLog;