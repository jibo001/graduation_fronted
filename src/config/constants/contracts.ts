export default {
  charity: {
    97: '0x9cE8d4c69fB09F15c1649F3D77D05992D9F8C9F4',
    56: '0xF5c07c80816C38DDca01494867B40c995D21b7e9',
  },
  usdt: {
    97: '0xA09b65fEdF5355c4dDF45b3233a0387A2e9A32A5',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>;
