import { FlexBox } from '../Box/Flex'
import { Handle, Input, StyledToggle } from './toggleStyles'
import { scales, ToggleProps } from './types'

const Toggle: React.FC<ToggleProps> = ({
    checked,
    scale = scales.LG,
    defaultColor = 'input',
    checkedColor = 'success',
    startIcon,
    endIcon,
    ...props
}) => {
    const isChecked = !!checked
    return (
        <StyledToggle
            scale={scale}
            $checked={isChecked}
            $defaultColor={defaultColor}
            $checkedColor={checkedColor}
        >
            <Input
                scale={scale}
                checked={checked}
                type={'checkbox'}
                {...props}
            />
            {startIcon && endIcon ? (
                <>
                    <Handle scale={scale}>
                        <FlexBox
                            height={'100%'}
                            justifyContent={'center'}
                            alignItems={'cneter'}
                        >
                            {checked ? endIcon(checked) : startIcon(!checked)}
                        </FlexBox>
                    </Handle>
                    <FlexBox
                        height={'100%'}
                        width={'100%'}
                        justifyContent={'space-around'}
                    >
                        {startIcon()}
                        {endIcon()}
                    </FlexBox>
                </>
            ) : (
                <Handle scale={scale} />
            )}
        </StyledToggle>
    )
}

export default Toggle
