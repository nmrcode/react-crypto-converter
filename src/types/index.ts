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
