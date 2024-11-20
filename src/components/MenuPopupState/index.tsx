import * as React from 'react'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'

import {
  // usePopupState,
  bindMenu,
  PopupState,
} from 'material-ui-popup-state/hooks'
import Image from 'next/image'

export interface MenuChildren {
  id: string,
  label: string,
  iconSrc?: string,
  onClick?: () => void,
}

interface Props {
  children: MenuChildren[]
  popupState: PopupState
}

const MenuPopupState = ({
  children,
  popupState
}: Props) => {

  return (
    <HoverMenu
      disableScrollLock
      {...bindMenu(popupState)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      {children.map((item) => (
        <MenuItem
          key={item.id}
          className='flex gap-2'
          onClick={item.onClick}
        >
          {item.iconSrc && (<Image alt='' src={item.iconSrc} height={24} width={24} />)}
          <div>{item.label}</div>
        </MenuItem>
      ))}
    </HoverMenu>
  )
}

export default MenuPopupState