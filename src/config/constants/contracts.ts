export default {
  charity: {
    97: '0xA2819F594D92093963EE95EC32038aaaEBE1aF04',
    56: '0xF5c07c80816C38DDca01494867B40c995D21b7e9',
  },
  usdt: {
    97: '0xe3e2B1dCc61b6A3F885cAcd5ED7d7D3d61fDf4A1',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>;
