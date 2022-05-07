import React, { useState } from 'react'

function Modal(props) {
  const [show, setShow] = useState(false);

  if (!props.show) {
    return null
  }
  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__header'>
          <h4>Modal</h4>
        </div>
        <div className='modal__body'>
          This is modal content
        </div>
        <div className='modal__footer'>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal