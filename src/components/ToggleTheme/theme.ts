import { darkColors, lightColors } from '../../theme/colors'

export interface ToggleTheme {
    handleBackground: string
}

export const light: ToggleTheme = {
    handleBackground: lightColors.backgroundAlt,
}

export const dark: ToggleTheme = {
    handleBackground: darkColors.backgroundAlt,
}
