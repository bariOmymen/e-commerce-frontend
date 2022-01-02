import { DefaultTheme } from 'styled-components'
import get from 'lodash/get'
const getThemeValue =
    (path: string, fallBack: string | undefined) => (theme: DefaultTheme) => {
        return get(theme, path, fallBack)
    }

export default getThemeValue
