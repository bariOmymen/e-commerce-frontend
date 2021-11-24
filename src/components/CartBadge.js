import React from 'react'
import classNames from 'classnames'
import { Badge } from './styles/Badge'
import { useWeb3React } from '@web3-react/core';

function CartBadge({classes, children, show, ...props}) {
    const {active} = useWeb3React();
    return (

        <Badge className={classNames(classes, 'badge')} show={show} active={active} {...props}>
            {children}
        </Badge>
    )
}

export default CartBadge
