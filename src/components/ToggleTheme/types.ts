import { InputHTMLAttributes, ReactNode } from 'react'
import { Colors } from '../../theme/types'

export const scales = {
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
} as const

export type Scales = typeof scales[keyof typeof scales]

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean
    defaultColor?: keyof Colors
    checkedColor?: keyof Colors
    scale?: Scales
    startIcon?: (isActive?: boolean) => ReactNode
    endIcon?: (isActive?: boolean) => ReactNode
}

export interface StyledToggleProps {
    $checked: boolean
    $defaultColor: keyof Colors
    $checkedColor: keyof Colors
    scale: Scales
}

export interface HandleProps {
    scale: Scales
}

export interface InputProps {
    scale: Scales
}

export const scaleKeys = {
    handleHeight: 'handleHeight',
    handleWidth: 'handleWidth',
    handleLeft: 'handleLeft',
    handleTop: 'handleTop',
    checkedLeft: 'checkedLeft',
    toggleHeight: 'toggleHeight',
    toggleWidth: 'toggleWidth',
} as const

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys]
