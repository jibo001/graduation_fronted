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
  personAddress: Address;
  idCard: string;
  name: string;
  integral: bigint;
  brithYear: number;
  sex: number;
  cumulativeAmount: bigint;
  myDonateIds: readonly bigint[];
  donatedIds: readonly bigint[];
  voteIds: readonly bigint[];
  isVoting: boolean;
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

export interface Vote {
  id: bigint;
  reason: string;
  promoter: `0x${string}`;
  startTime: bigint;
  target: `0x${string}`;
  agreeNum: bigint;
  disagreeNum: bigint;
  isFinish: boolean;
  voters: readonly `0x${string}`[]
}


export interface VoteDetail {
  vote: Vote;
  targetPerson: Person;
  promoter: Person;
  isCurrentAuditor: boolean;
}

export enum AUDIT_STATUS {
  NO_AUDIT,
  AGREE,
  DISAGREE
}