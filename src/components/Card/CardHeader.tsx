import styled, { DefaultTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

interface CardHeaderProps extends SpaceProps {
    theme: DefaultTheme
}

const CardHeader = styled.div<CardHeaderProps>`
    background: ${({ theme }) => theme.card.cardHeaderBackground};
    ${space}
`
CardHeader.defaultProps = {
    p: '24px',
}

export default CardHeader
