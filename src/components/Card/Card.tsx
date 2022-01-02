import StyledCard from './StyledCard'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return <StyledCard {...props}>{children}</StyledCard>
}

export default Card
