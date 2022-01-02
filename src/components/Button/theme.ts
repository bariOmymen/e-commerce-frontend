import { scale, variants } from './types'

export const scaleVariants = {
    [scale.MD]: {
        padding: '24px',
        fontSize: '22px',
    },
    [scale.SM]: {
        padding: '16px',
    },
    [scale.XS]: {
        padding: '8px',
    },
}

export const styleVariants = {
    [variants.PRIMARY]: {
        backgroundColor: 'primary',
        color: 'white',
    },

    [variants.SECONDARY]: {
        backgroundColor: 'transparent',
        border: '2px solid',
        borderColor: 'primary',
        boxShadow: 'none',
        color: 'primary',
        ':disabled': {
            backgroundColor: 'transparent',
        },
    },
    [variants.TERTIARY]: {
        backgroundColor: 'tertiary',
        boxShadow: 'none',
        color: 'primary',
    },
    [variants.SUBTLE]: {
        backgroundColor: 'textSubtle',
        color: 'white',
    },
    [variants.DANGER]: {
        backgroundColor: 'failure',
        color: 'white',
    },
    [variants.SUCCESS]: {
        backgroundColor: 'success',
        color: 'white',
    },
    [variants.TEXT]: {
        backgroundColor: 'transparent',
        color: 'primary',
        boxShadow: 'none',
    },
}
