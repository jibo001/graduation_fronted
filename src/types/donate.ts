import { Address } from "viem";

export interface Donate {
  id: bigint;
  personAddress: Address;
  targetAmount: bigint;
  currentAmount: bigint;
  json: string;
  isPassed: boolean;
  isFinish: boolean;
  auditorsAddress: Address[];
  donatorsAddress: Address[];
  auditProgress: boolean[];
  auditorReason: string[];
  images: string[];
  title: string;
  detail: string;
  sickName: string
}

export interface Person {
  idCard: string;
  name: string;
  integral: bigint;
  brithYear: number;
  sex: number;
  cumulativeAmount: bigint;
  myDonateIds: readonly bigint[];
  donatedIds: readonly bigint[];
  voteIds: readonly bigint[];
}

export interface DonateWithPerson {
  donate: Donate & { images: string[]; title: string, sickName: string };
  person: Person;
}

export type RegisterParams = {
  idCard: string;
  name: string;
  birthYear: number;
  sex: number;
}

export type DonateParams = {
  title: string;
  detail: string;
  images: string;
  sickName: string;
  targetAmount: number;
}

export enum AUDIT_STATUS {
  NO_AUDIT,
  AGREE,
  DISAGREE
}