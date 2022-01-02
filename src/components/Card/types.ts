import { HTMLAttributes } from 'react'
import { SpaceProps } from 'styled-system'

export type CardTheme = {
    background: string
    boxShadow: string
    boxShadowWarning: string
    boxShadowSuccess: string
    cardHeaderBackground: string
}

export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    isActive?: boolean
    isSuccess?: boolean
    isWarning?: boolean
    isDisabled?: boolean
}
