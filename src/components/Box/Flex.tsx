import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { Box } from './Box'
import { FlexProps } from './typs'

export const FlexBox = styled(Box)<FlexProps>`
    display: flex;
    ${flexbox}
`
