import { action, computed, makeObservable, observable } from "mobx";
import { TCoin, TCoinDiff } from "../types";
import axios from "axios";
import converterStore from "./converterStore";

class CurrenciesStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      diffObj: observable,
      getItems: computed,
      getDiffObj: computed,
      setItems: action,
      fetchCoins: action,
    });
  }

  //Observable
  items: TCoin[] = [];
  diffObj: TCoinDiff = {};

  //Actions
  setItems = (items: TCoin[]): void => {
    this.diffObj = this.diffCurrencies(this.items, items).reduce(
      (initObj: TCoinDiff, obj: TCoin) => {
        const newObj: TCoin = items.find((o) => o.name === obj.name)!;
        const oldObj: TCoin = this.items.find(
          (itemObj) => itemObj.name === newObj.name
        )!;
        const color: string =
          newObj.price === oldObj.price
            ? ""
            : newObj.price > oldObj.price
            ? "green"
            : "tomato";

        initObj[newObj.name] = color;

        return initObj;
      },
      {}
    );
    this.items = items;
    setTimeout(() => {
      this.diffObj = {};
    }, 1000);
  };

  fetchCoins = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD"
      )
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(8),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        this.setItems(coins);
        converterStore.setSelectedCoin(coins[0]);
      });
  };

  //Computed
  get getItems() {
    return this.items;
  }

  get getDiffObj() {
    return this.diffObj;
  }

  //Funcs
  diffCurrencies(arr1: TCoin[], arr2: TCoin[]) {
    return arr1.filter((obj, index) => {
      if (obj.price !== arr2[index].price) {
        return true;
      }
      return false;
    });
  }
}

export default new CurrenciesStore();
