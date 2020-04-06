import React, { useRef, useState } from 'react'
import { StyledContainerApp, StyledTreeBlock } from '@/components/style'
import { TreeList } from '@/components/TreeList'
// import { StyledAppWrapper } from '@/theme/globalStyle'

const baseTree = require('../data')


const Tree = () => {
  const [tree, setTree] = useState(baseTree)
  const dragItemNode = useRef()
  const dragItem = useRef()
  const dragItemObject = useRef()

  const refs = {
    dragItem,
    dragItemNode,
    dragItemObject,
  }

  return (
    <StyledContainerApp>
      <StyledTreeBlock>
        <TreeList tree={tree} setTree={setTree} refs={refs} />
      </StyledTreeBlock>
    </StyledContainerApp>
  )
}

export default Tree
