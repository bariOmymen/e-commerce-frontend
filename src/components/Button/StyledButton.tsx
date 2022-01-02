import styled, { DefaultTheme } from 'styled-components'
import { layout, space, variant } from 'styled-system'
import { scaleVariants, styleVariants } from './theme'
import { BaseButtonProps } from './types'
interface ThemedButtonProps extends BaseButtonProps {
    theme: DefaultTheme
}
const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
    if (isLoading === true) {
        return `
        &:disabled,
        &.pancake-button--disabled {
          cursor: not-allowed;
        }
      `
    }

    return `
      &:disabled,
      &.pancake-button--disabled {
        background-color: ${theme.colors.backgroundDisabled};
        border-color: ${theme.colors.backgroundDisabled};
        box-shadow: none;
        color: ${theme.colors.textDisabled};
        cursor: not-allowed;
      }
    `
}

const getOpacity = ({ isLoading = false }: ThemedButtonProps) => {
    return isLoading ? '0.5' : '1'
}

const StyledButton = styled.button<BaseButtonProps>`
    text-align: center;
    border: 0;
    border-radius: 16px;
    box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    opacity: ${getOpacity}
    justify-content: center;
    letter-spacing: 0.03rem;
    line-height: 1;
    outline: 0;
    text-decoration: none;
    &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
        opacity: 0.65;
    }

    &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
        opacity: 0.85;
    }

    transition: background-color 0.2s;

    ${getDisabledStyles}
    ${variant({
        prop: 'scale',
        variants: scaleVariants,
    })}
    ${variant({
        prop: 'variant',
        variants: styleVariants,
    })}
    ${space}
    ${layout}
`

export default StyledButton
