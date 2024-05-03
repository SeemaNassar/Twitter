import React from 'react'
import './Avatar.css'
function Avatar({
    name,
    src
}) {
  return (
    <div className="photo">
    <img 
        alt={name} 
        src={src}
    />
</div>
  )
}

export default Avatar
