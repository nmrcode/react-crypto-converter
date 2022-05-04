import { action, computed, makeObservable, observable } from "mobx";
import { TCoin } from "../types";
import axios from "axios";

class CurrenciesStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      getItems: computed,
      setItems: action,
      fetchCoins: action,
    });
  }

  //Observable
  items: TCoin[] = [];

  //Actions
  setItems = (items: TCoin[]): void => {
    this.items = items;
  };

  fetchCoins = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(2),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        this.items = coins;
      })
      .catch((e) => console.log(`${e}`));
  };

  //Computed
  get getItems() {
    return this.items;
  }
}

export default new CurrenciesStore();
