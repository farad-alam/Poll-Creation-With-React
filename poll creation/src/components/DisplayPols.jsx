import React from 'react'

function DisplayPols(props) {
    const {title} = props
  return (
    <p className="text-[14px] bg-slate-200 rounded px-1 cursor-pointer">
      {title}
    </p>
  );
}

export default DisplayPols