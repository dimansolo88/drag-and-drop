import React from 'react'
import { GlobalStyle, StyledAppWrapper,  } from '@/theme/globalStyle'
import { Header } from '@/blocks/header/index'
import Tree from '@/components/Tree'

const App = () => {


  return (
    <StyledAppWrapper>
      <Header/>
      <GlobalStyle />
        <Tree/>
    </StyledAppWrapper>

  )
}

export default App
