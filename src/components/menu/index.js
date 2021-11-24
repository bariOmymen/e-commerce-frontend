import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartBadge from '../CartBadge'
import ConnectButton from '../connectButton'
import User from '../user'
import './styles.css'

function Nav() {
    const {cartItems} = useSelector(state => state.cart);
    const {userInfo} = useSelector(state => state.user);
    const {active} = useWeb3React();
    return (
       
            <nav className='container'>

            <Link to="/"> AMAZONIA</Link>
<div className='right-side'>
    <ul className='nav-items'>
        
        <li>
        <Link className='cart' to="/cart"> Cart {cartItems.length > 0 && userInfo ? <CartBadge show classes='cart-badge'>
  {cartItems.length}
</CartBadge> : null}</Link>
        </li>
        <li>{
                active ? <User /> 
                : <ConnectButton />
                
            }</li>
    </ul>
            
 
           

            </div>


</nav>
    )
}

export default Nav
