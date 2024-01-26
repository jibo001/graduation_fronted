'use client'

import { RouterProvider } from 'react-router-dom'
import Web3Wrapper from './container/Web3Wrapper'
import ReactQueryWrapper from './container/ReactQueryWrapper'
import router from './router'

function App() {
  return (
    <Web3Wrapper>
      <ReactQueryWrapper>
        <RouterProvider router={router} />
      </ReactQueryWrapper>
    </Web3Wrapper>
  )
}

export default App
