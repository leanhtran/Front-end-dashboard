import React from 'react'
import {Dropdown} from 'react-bootstrap'

function DropdownOption({ options, onChangeOption }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options && options.map((item, index) => <Dropdown.Item onSelect={() => onChangeOption(item.type, item.value)} key={index.toString()}>{item.label}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownOption
