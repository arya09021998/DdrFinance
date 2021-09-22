import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('1Swap'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2',
      },
      {
        label: t('Liquidity'),
        href: '/add/BNB/0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2',
      },
    ],
  },
  {
    label: t('Love Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Love Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  {
    label: t('Jackpot'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Games'),
    icon: 'PredictionsIcon',
    href: '/games',
  },
  {
    label: t('NFTs'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Launchpad'),
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Techrate Audit'),
        href: 'https://lovepot.finance/pdf/techrate.pdf',
      },
      {
        label: t('DexGuru'),
        href: 'https://dex.guru/token/0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2-bsc',
      },
      {
        label: t('PooCoin'),
        href: 'https://poocoin.app/tokens/0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2',
      },
      {
        label: t('Dextools'),
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2',
      },
      {
        label: t('BSCscan'),
        href: 'https://bscscan.com/token/0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/lovepot',
      },
      {
        label: t('Docs'),
        href: 'https://lovepot.finance/docs',
      },
      {
        label: t('News'),
        href: 'https://medium.com/@LovePot',
      },
    ],
  }
]

export default config
