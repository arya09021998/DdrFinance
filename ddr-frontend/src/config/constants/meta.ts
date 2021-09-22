import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LovePot',
  description:
    'The most popular AMM on BSC by user count! Earn LOVE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by LovePot), NFTs, and more, on a platform you can trust.',
  image: 'https://lovepot.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LovePot')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LovePot')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LovePot')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LovePot')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LovePot')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LovePot')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('LovePot')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LovePot')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LovePot')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('LovePot')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('LovePot')}`,
      }
    default:
      return null
  }
}
