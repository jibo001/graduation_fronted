export default {
  charity: {
    11155111: '0xe3D5318d363259D5Bb8ef4290284899Da7c4d2B2',
    56: '0xF5c07c80816C38DDca01494867B40c995D21b7e9',
  },
  usdt: {
    11155111: '0x5fF1a1820F6EF8dC822667Af1D518291Fd4b860b',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>;
