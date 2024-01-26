export interface Donate {
  id: string;
  name: string;
  age: string;
  title: string;
  detail: string;
  images: string[];
  sickName: string;
  currentAmount: number;
  targetAmount: number;
  sex: string;
}

export type RegisterParams = {
  idCard: string;
  name: string;
  age: number;
  sex: number;
}