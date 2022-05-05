import { action, computed, makeObservable, observable } from "mobx";
import { TCoin, TSelectedCoin } from "../types";

class ConverterStore {
  constructor() {
    makeObservable(this, {
      selectedCoin: observable,
      test: observable,
      setSelectedCoin: action,
      incTest: action,
      getSelectedCoin: computed,
    });
  }

  //Observable
  test: number = 1;

  incTest(num: number) {
    this.test++;
    console.log(this.test);
  }

  selectedCoin: TSelectedCoin = {
    name: "",
    price: 0,
  };

  //Actions
  setSelectedCoin(coin: TCoin) {
    return (this.selectedCoin = {
      name: coin.name,
      price: coin.price,
    });
  }

  //Computed
  get getSelectedCoin() {
    return this.selectedCoin;
  }
}

export default new ConverterStore();
