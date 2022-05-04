import { action, computed, makeObservable, observable } from "mobx";
import { TCoin } from "../types";

class CurrenciesStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      getItems: computed,
      setItems: action,
    });
  }

  test: number = 1;

  //Observable
  items: TCoin[] = [];

  //Actions
  setItems = (items: TCoin[]): void => {
    this.items = items;
  };

  //Computed
  get getItems() {
    return this.items;
  }
}

export default CurrenciesStore;
