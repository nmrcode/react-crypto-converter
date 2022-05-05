export type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
};

export type ICryptoTable = {
  items: TCoin[];
};

export type TCoinDiff = { [key: string]: string };

export type TSelectedCoin = {
  name: string;
  price: number;
};

export type TSetValue1Action = {
  type: string;
  payload: string;
};

export type TAction = TSetValue1Action;

export type TReducerState = {
  value1: string;
  value2: string;
  selectedCoin: TSelectedCoin;
};
