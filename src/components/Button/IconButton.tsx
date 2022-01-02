import styled from 'styled-components'
import Button from './Button'
import { BaseButtonProps, PolimorphicComponent } from './types'

const IconButton: PolimorphicComponent<BaseButtonProps, 'button'> = styled(
    Button
)<BaseButtonProps>`
    padding: ${({ scale }) => (scale === 'sm' ? '8px' : '12px')};
`
export default IconButton
