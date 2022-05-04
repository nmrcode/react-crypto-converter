import CurrenciesStore from "./currenciesStore";
import ConverterStore from "./converterStore";

const RootStore = {
  currenciesStore: new CurrenciesStore(),
  converterStore: new ConverterStore(),
};

export default RootStore;
