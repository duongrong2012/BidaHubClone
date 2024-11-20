import Category from "@/types/category"
import { bindHover, usePopupState } from "material-ui-popup-state/hooks";
import Image from "next/image";
import MenuPopupState from "../MenuPopupState";
import images from "@/assets";

interface Props {
    item: Category;
}

function CategoryMenuItem({ item }: Props) {
    const popupState = usePopupState({
        variant: 'popover',
    })

    const isParentCategory = !!item.childCategories?.length;

    return (
        <div
            key={item.id}
            className='flex gap-3 p-4 rounded-md absoluteCenter hover:lightPrimaryHoverBG'
            {...bindHover(popupState)}
        >
            <div className='text-sm'>{item.name}</div>
            {isParentCategory && (
                <>
                    <Image alt='' src={images.arrowDown} width={12} />
                    {/* <Menu
                          isOpen={Boolean(state.anchorCategory) && state.hoveredCategoryItemId === item.id}
                          anchorEl={state.anchorCategory}
                          MenuListProps={{ onMouseLeave: onLeaveHoverCategory }}
                        >
                          {item.childCategories?.map((item) => ({
                            id: item.id,
                            label: item.name
                          }))}
                        </Menu> */}
                    <MenuPopupState
                        popupState={popupState}
                    >
                        {item.childCategories?.map((item) => ({
                            id: item.id,
                            label: item.name
                        }))}
                    </MenuPopupState>
                </>
            )}
        </div>
    )
}

export default CategoryMenuItem