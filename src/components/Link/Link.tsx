import styled from 'styled-components'
import { Text } from '../Text'
import { LinkProps } from './types'

const StyledLink = styled(Text)<LinkProps>`
    display: flex;
    align-items: center;
    width: fit-content;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Link: React.FC<LinkProps> = ({ ...props }) => {
    const internalProps = {}
    return <StyledLink as="a" bold {...props} />
}

export default Link
