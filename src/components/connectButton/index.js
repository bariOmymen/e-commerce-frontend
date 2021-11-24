import { useWeb3React } from '@web3-react/core';
import React, { useCallback } from 'react'
import { injected } from '../../connectors';
import './styles.css'

function ConnectButton() {
    const {activate, account, active} = useWeb3React();
    console.log(active);
    const connect = useCallback( () => {
  
      try{
       activate(injected);
        
      } catch (e){
        console.log(e.message);
      }
  
    }, [activate])
    return (
        <div className='connect-container'>
             {
            active ? account :
             <button className='btn connect-btn' onClick={connect}>connect</button>
}
        </div>
    )
}

export default ConnectButton
