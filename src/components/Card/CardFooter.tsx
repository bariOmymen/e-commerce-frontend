import styled, { DefaultTheme } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
interface FooterProps extends SpaceProps {
    theme: DefaultTheme
}
const CardFooter = styled.div<FooterProps>`
    border-top: 1px soild ${({ theme }) => theme.colors.borderColor};
    ${space};
`

CardFooter.defaultProps = {
    p: '24px',
}
export default CardFooter
