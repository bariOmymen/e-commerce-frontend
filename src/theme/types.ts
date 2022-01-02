export type Breakpoints = string[]

export type MediaQueries = {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    nav: string
}

export type Spacing = number[]

export type Radii = {
    small: string
    default: string
    card: string
    circle: string
}

export type Shadows = {
    level1: string
    active: string
    success: string
    warning: string
    focus: string
    inset: string
}

export type Gradients = {
    bubblegum: string

    inverseBubblegum: string
    cardHeader: string
    blue: string
    violet: string
    violetAlt: string
    gold: string
}

export type Colors = {
    primary: string
    primaryBright: string
    primaryDark: string
    secondary: string
    tertiary: string
    success: string
    failure: string
    warning: string
    contrast: string
    borderColor: string
    invertedContrast: string
    input: string
    inputSecondary: string
    background: string
    backgroundDisabled: string
    text: string
    textDisabled: string
    textSubtle: string
    card: string
    backgroundAlt: string
    backgroundAlt2: string
    cardBorder: string
    dropdown: string
    dropdownDeep: string
    disabled: string

    // Gradients
    gradients: Gradients

    // Brand colors
    binance: string
}

export type ZIndices = {
    dropdown: number
    modal: number
}
