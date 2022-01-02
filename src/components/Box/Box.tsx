import styled from 'styled-components'
import { background, border, layout, position, space } from 'styled-system'
import { BoxProps } from './typs'

export const Box = styled.div<BoxProps>`
    ${background}
    ${position}
${space}
${layout}
${border}
`
