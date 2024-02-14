export default {
  charity: {
    97: '0x2dc49B54EE454aF6b68CD0c4c71Fb6f3A09889b5',
    56: '0xF5c07c80816C38DDca01494867B40c995D21b7e9',
  },
  usdt: {
    97: '0xA09b65fEdF5355c4dDF45b3233a0387A2e9A32A5',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>;
