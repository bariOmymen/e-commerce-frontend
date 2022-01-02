import { cloneElement, ElementType, isValidElement } from 'react'
import StyledButton from './StyledButton'
import { ButtonProps } from './types'

const Button = <E extends ElementType = 'button'>(
    props: ButtonProps<E>
): JSX.Element => {
    const {
        isLoading,
        className,
        scale,
        variant,
        children,
        startIcon,
        endIcon,
        ...rest
    } = props
    const classNames = className ? [className] : []

    if (isLoading) {
        classNames.push('pancake-button--disabled')
    }
    return (
        <StyledButton
            scale={scale}
            className={classNames.join(' ')}
            isLoading={isLoading}
            variant={variant}
            {...rest}
        >
            <>
                {isValidElement(startIcon) &&
                    cloneElement(startIcon, { mr: '0.5rem' })}
                {children}
                {isValidElement(endIcon) &&
                    cloneElement(endIcon, { mr: '0.5rem' })}
            </>
        </StyledButton>
    )
}

export default Button
