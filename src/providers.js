import React, { Children } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

export const getLibrary = (provider) => {
    return new Web3(provider);
}




// function Providers() {
//     return (
//         <Web3ReactProvider getLibrary={getLibrary}>
//             {Children}
//         </Web3ReactProvider>
//     )
// }

// export default Providers
