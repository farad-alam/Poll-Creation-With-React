import React from 'react'

function Button(props) {
    const {color, value, type} = props
  return (
    <button type={type || "button"} className={`btn btn-sm btn-${color} text-white mt-5`}>
      {value}
    </button>
  );
}

export default Button