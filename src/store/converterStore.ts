import { makeObservable } from "mobx";

class ConverterStore {
  constructor() {
    makeObservable(this, {});
  }
}

export default new ConverterStore();
