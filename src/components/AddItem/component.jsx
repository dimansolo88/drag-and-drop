import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/theme/globalStyle'

const AddItem = ({ parent, setTree, handleDragEnter }) => {

  const [editMOde, setEditMOde] = useState(false)
  const [value, setValue] = useState('')




  const inputHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const addChild = (parent, value) => {
    setTree(oldTree => {
      const newTree = Object.assign({}, oldTree)

      parent.children.push({
        [Date.now()]: {
          label: value,
          children: [],
        },
      })

      return newTree
    })
  }

  const toggleOpenCloseEditMOde = () => {
    setEditMOde(!editMOde)
    if (value) {
      addChild(parent, value)
      setValue('')
    }
  }

  const handleOnClick = useCallback(() => addChild(parent), [parent])
  const handleOnDragEnter = useCallback(e => handleDragEnter(e, parent), [parent])

  return (
    <li>
      <ButtonStyled
        onClick={handleOnClick}
        // onDragEnter={handleOnDragEnter}

      >
        +
      </ButtonStyled>
    </li>
  )
}

AddItem.propTypes = {
  parent: PropTypes.object,
  setTree: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
}

export default AddItem
