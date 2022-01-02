import { ComponentProps, ElementType, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LayoutProps, SpaceProps } from 'styled-system'

export const scale = {
    MD: 'md',
    SM: 'sm',
    XS: 'xs',
} as const

export const variants = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
    TEXT: 'text',
    DANGER: 'danger',
    SUBTLE: 'subtle',
    SUCCESS: 'success',
} as const

export type Scale = typeof scale[keyof typeof scale]
export type Variants = typeof variants[keyof typeof variants]

type AsProps<E extends ElementType = ElementType> = {
    as?: E
}

type MergeProps<E extends ElementType> = AsProps<E> &
    Omit<ComponentProps<E>, keyof AsProps>

type PolimorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>

export type PolimorphicComponent<P, D extends ElementType = 'button'> = <
    E extends ElementType = D
>(
    props: PolimorphicComponentProps<E, P>
) => ReactElement | null

export interface BaseButtonProps extends LayoutProps, SpaceProps {
    as?: 'a' | 'button' | typeof Link
    isLoading?: boolean
    scale?: Scale
    variant?: Variants
    startIcon?: ReactNode
    endIcon?: ReactNode
}

export type ButtonProps<P extends ElementType = 'button'> =
    PolimorphicComponentProps<P, BaseButtonProps>
