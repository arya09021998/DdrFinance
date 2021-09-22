import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LOVE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7C64998d09808627745B59697d789F5903d7F2d1',
    },
    token: tokens.love,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'LOVE-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xf28Dc86FBa42B3C2eb17B26741bFED5db16FbbbE',
    },
    token: tokens.love,
    quoteToken: tokens.btcb,
  },
  {
    pid: 2,
    lpSymbol: 'LOVE-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x44b5731a26f52E0cE9A3E9D140B68a4132BE4418',
    },
    token: tokens.love,
    quoteToken: tokens.cake,
  },
  {
    pid: 3,
    lpSymbol: 'LOVE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x7cc70D5C2c051681dD8c67346E630BD4A973d51C',
    },
    token: tokens.love,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'LOVE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1A2c7E03b76d2122b4b894D08b9146aF4C3B510d',
    },
    token: tokens.love,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'LOVE-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x303b311b6008e0B43f9B25161D404c425b3D1735',
    },
    token: tokens.love,
    quoteToken: tokens.usdc,
  },
  {
    pid: 6,
    lpSymbol: 'LOVE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x1A2c7E03b76d2122b4b894D08b9146aF4C3B510d', /* 0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2 */
    },
    token: tokens.love,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'CAKE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', /* 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82 */
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'YAE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x32F8eB47a1DB09538178A17BCBf74b498fD6c270', /* 0x4eE438be38F8682ABB089F2BFeA48851C5E71EAF */
    },
    token: tokens.yae,
    quoteToken: tokens.busd,
  },
  {
    pid: 9,
    lpSymbol: 'wBNB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 10,
    lpSymbol: 'BTCB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', /* 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c */
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
  {
    pid: 11,
    lpSymbol: 'ALPACA',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7752e1FA9F3a2e860856458517008558DEb989e3', /* 0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F */
    },
    token: tokens.alpa,
    quoteToken: tokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'ETH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', /* 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 */
    },
    token: tokens.eth,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'DOT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998', /* 0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402 */
    },
    token: tokens.dot,
    quoteToken: tokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'LINK',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x00C4849E82D574B02f43c0F84b131dCC9cAbFC49', /* 0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD */
    },
    token: tokens.link,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 16,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }
]

export default farms
