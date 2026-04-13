declare module 'react-native-ios-context-menu' {
  import type * as React from 'react'
  import type { ViewProps } from 'react-native'

  export type MenuElementSize = 'small' | 'medium' | 'large'

  export type ImageSystemConfig = {
    type?: 'IMAGE_SYSTEM' | string
    imageValue?: string
    pointSize?: number
    weight?: string
    scale?: string
    tint?: string
    [key: string]: unknown
  }

  export type ImageOptions = {
    [key: string]: unknown
  }

  export type MenuActionConfig = {
    actionKey?: string
    actionTitle?: string
    discoverabilityTitle?: string
    icon?: any
    menuAttributes?: any
    menuState?: 'on' | 'off' | 'mixed'
    [key: string]: unknown
  }

  export type MenuConfig = {
    menuTitle?: string
    menuItems?: Array<MenuActionConfig | MenuConfig>
    menuOptions?: string[]
    menuPreferredElementSize?: MenuElementSize
    icon?: ImageSystemConfig
    menuAttributes?: string[]
    [key: string]: unknown
  }

  export type MenuAuxiliaryPreviewConfig = {
    alignmentHorizontal?: any
    anchorPosition?: any
    height?: any
    marginAuxiliaryPreview?: any
    marginPreview?: any
    transitionConfigEntrance?: any
    transitionEntranceDelay?: any
    width?: any
    [key: string]: unknown
  }

  export type MenuPressEvent = {
    nativeEvent: {
      actionKey: string
      [key: string]: unknown
    }
  }

  export type PreviewConfig = {
    previewType?: any
    previewSize?: any
    backgroundColor?: any
    borderRadius?: any
    isResizeAnimated?: any
    preferredCommitStyle?: any
    [key: string]: unknown
  }

  export type ContextMenuCommonProps = ViewProps & {
    ref?: any
    menuConfig?: MenuConfig
    isMenuPrimaryAction?: boolean
    onPressMenuItem?: (event: MenuPressEvent) => void
    onPressMenuPreview?: (...args: any[]) => void
    previewConfig?: PreviewConfig
    renderPreview?: () => React.ReactNode
    lazyPreview?: boolean
    onMenuDidHide?: () => void
    onMenuDidShow?: () => void
    onMenuWillHide?: () => void
    onMenuWillShow?: () => void
    shouldPreventLongPressGestureFromPropagating?: boolean
    auxiliaryPreviewConfig?: MenuAuxiliaryPreviewConfig
    isAuxiliaryPreviewEnabled?: boolean
    onMenuAuxiliaryPreviewDidShow?: () => void
    onMenuAuxiliaryPreviewWillShow?: () => void
    renderAuxiliaryPreview?: () => React.ReactNode
  }

  export const ContextMenuView: React.ComponentType<ContextMenuCommonProps>
  export const ContextMenuButton: React.ComponentType<ContextMenuCommonProps>
}
