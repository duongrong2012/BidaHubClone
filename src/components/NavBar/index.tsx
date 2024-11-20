'use client'

import images from '@/assets'
import Image from 'next/image'
import React from 'react'
import Input from '../Input'
import CircleImage from '../CircleImage'
import Menu, { MenuChildren } from '../Menu'
import { MenuProps } from '@mui/material'
import { useDispatch } from 'react-redux'
import { navbarHeightActions } from '@/redux/slices/navbar'
import Category from '@/types/category'
import { bindHover, usePopupState } from 'material-ui-popup-state/hooks'
import MenuPopupState from '../MenuPopupState'
import CategoryMenuItem from '../CategoryMenuItem'
import { users } from '@/constants/fakedata/user'
import { useRouter } from 'next/navigation'
import useCheckAuth from '@/hooks/useCheckAuth'
import { AuthModalSingleton } from '../AuthModal'

interface State {
  anchorEl: MenuProps['anchorEl']
  anchorCategory: MenuProps['anchorEl']
  hoveredCategoryItemId: Category['id'] | '' | null
}

interface Props {
  categories: Category[]
}

function NavBar({ categories }: Props) {

  const [state, setState] = React.useState<State>({
    anchorEl: null,
    anchorCategory: null,
    hoveredCategoryItemId: null
  })

  const dispatch = useDispatch()

  const navBarRef = React.useRef<HTMLDivElement | null>(null)

  const router = useRouter()

  const user = users[0]

  // const user = null

  const { checkLogin } = useCheckAuth(user)

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'categoryMenu',
  })

  const authMenuItems = React.useMemo<MenuChildren[]>(() => {
    return [{
      id: 'login',
      label: 'Đăng nhập / Đăng ký',
      iconSrc: images.userCircle2,
      onClick: () => {
        AuthModalSingleton.open()
        setState((prevState) => ({
          ...prevState,
          anchorEl: null
        }));
      }
    }, {
      id: 'wishList',
      label: 'DS yêu thích',
      iconSrc: images.heart,
    }]
  }, []);

  const onClickOpenAuthDropdown = React.useCallback<React.MouseEventHandler<HTMLDivElement>>((event) => {
    setState((prevState) => ({
      ...prevState,
      anchorEl: event.currentTarget,
    }));
  }, []);

  const onCloseUserAuthDropdown = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      anchorEl: null,
    }));
  }, []);

  const onClickCart = React.useCallback(() => {
    if (checkLogin()) {
      router.push('/cart')
    }
  }, [checkLogin, router]);

  React.useEffect(() => {
    if (navBarRef.current) {
      dispatch(navbarHeightActions.getnavbarHeightSuccess(navBarRef.current.offsetHeight))
    }
  }, [dispatch]);

  return (
    <>
      <div className='bg-white z-40 fixed top-0 w-full'>
        <div className='container mx-auto items-center tb:px-4' ref={navBarRef}>
          <div className='flex flex-row borderBottom items-center px-2 py-2 tb:py-3 dt:py-4 dt:gap-4'>
            <Image alt='' src={images.logo} width={192} priority />
            <div className='flex-1 tb:flex' />
            <Input
              className='!hidden dt:!flex'
              suffix={
                <div className='bg-primary w-14 h-11 absoluteCenter rounded-lg'>
                  <Image src={images.search} alt='' height={24} width={24} />
                </div>
              }
            />
            <div className='flex gap-[2px] dt:gap-3'>
              <div className='hidden p-1 hover:lightPrimaryHoverBG dt:absoluteCenter dt:gap-1'>
                <CircleImage src={images.phone} />
                <div className='hidden flex-col dt:flex'>
                  <div className='text-silver font-medium text-ss'>Hotline</div>
                  <div className='font-semibold text-sm'>0949.696.696</div>
                </div>
              </div>
              <div
                className={`p-1 ${Boolean(state.anchorEl) && 'lightPrimaryHoverBG'} hover:lightPrimaryHoverBG dt:absoluteCenter dt:gap-1`}
                onClick={onClickOpenAuthDropdown}
              >
                <CircleImage src={images.userCircle} />
                <div className='hidden flex-col dt:flex'>
                  <div className='text-silver font-medium text-ss whitespace-nowrap'>{user ? 'Tài khoản' : 'Đăng nhập hoặc'}</div>
                  <div className='w-[100px] truncate font-semibold text-sm'>{user ? 'Ngô Đức Minh Trí' : 'Đăng ký'}</div>
                </div>
              </div>
              <div
                className='p-1 hover:lightPrimaryHoverBG dt:absoluteCenter dt:gap-1'
                onClick={onClickCart}
              >
                <CircleImage src={images.cart} isEnableBadge badgeContent={2} />
                <div className='hidden font-medium text-ss whitespace-nowrap dt:flex text-silver'>Giỏ hàng</div>
              </div>
              <div className='p-1 hover:lightPrimaryHoverBG dt:hidden'>
                <CircleImage src={images.hamBurger} />
              </div>
            </div>
          </div>
          <div className='' />
          <div className='absoluteCenter px-2 py-2 dt:justify-normal'>
            <div className='hidden dt:flex dt:flex-row gap-4'>
              <div
                className='absoluteCenter gap-1 p-4 rounded-md hover:lightPrimaryHoverBG'
                {...bindHover(popupState)}
              >
                <Image alt='' src={images.hamBurger} width={24} />
                <div>Danh mục</div>
                <MenuPopupState
                  popupState={popupState}
                >
                  {categories.map((item) => ({
                    id: item.id,
                    label: item.name
                  }))}
                </MenuPopupState>
              </div>
              {categories.map((item) => <CategoryMenuItem key={item.id} item={item} />)}
            </div>
            <Input
              className='dt:!hidden'
              suffix={
                <div className='bg-primary w-14 h-11 absoluteCenter rounded-lg'>
                  <Image src={images.search} alt='' height={24} width={24} />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <Menu
        isOpen={Boolean(state.anchorEl)}
        anchorEl={state.anchorEl}
        onClose={onCloseUserAuthDropdown}

      >
        {authMenuItems}
      </Menu>
    </>
  )
}

export default NavBar