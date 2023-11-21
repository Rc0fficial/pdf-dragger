import React from 'react'
import Draggable from 'react-draggable';

export default function Pdf() {
  return (
    <div>
      Pdf page
      <Draggable>
  <div className='pointer'>I can now be moved around!</div>
</Draggable>
    </div>
  )
}
