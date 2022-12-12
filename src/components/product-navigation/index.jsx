import React from 'react'
import { useState } from 'react'

const ProductNavigation = ({ onSelection }) => {
  return (
    <div className='nav-section'>
      

      <div class="list-group">
      <ul>
          <li class="list-group-item list-group-item-action" onClick={() => { onSelection('men') }}>Men</li>
          <li class="list-group-item list-group-item-action" onClick={() => { onSelection('women') }}>Women</li>
          <li  class="list-group-item list-group-item-action"onClick={() => { onSelection('kids') }}>Kids</li>
          <li class="list-group-item list-group-item-action" onClick={() => { onSelection() }}>All</li>
        </ul>
        
      </div>
    </div>
  )
}

export default ProductNavigation;
