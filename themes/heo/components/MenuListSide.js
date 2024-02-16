import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import { MenuItemCollapse } from './MenuItemCollapse'
import CONFIG from '../config'

export const MenuListSide = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  let links = [
    {
      id: 1,
      icon: 'fa-solid fa-house',
      name: locale.NAV.INDEX,
      to: '/',
      show: siteConfig('HEO_MENU_INDEX', null, CONFIG)
    },
    {
      id: 2,
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      to: '/search',
      show: siteConfig('HEO_MENU_SEARCH', null, CONFIG)
    },
    {
      id: 3,
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      to: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE', null, CONFIG)
    }
  ]

  // if (customNav) {
  //   links = customNav.concat(links)
  // }

  // // 如果 开启自定义菜单，则覆盖Page生成的菜单
  // if (siteConfig('CUSTOM_MENU')) {
  //   links = customMenu
  // }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav className="flex-col space-y-2">
      {links?.map((link, index) => (
        <MenuItemCollapse key={index} link={link} />
      ))}
    </nav>
  )
}
