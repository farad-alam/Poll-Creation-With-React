import React from 'react'
import Poll from './Poll'

function Content(props) {
    const {pollDetails} = props
  return (
    <div className="col-span-8 bg-slate-300 rounded p-2">
      {pollDetails ? (
        <Poll pollDetails={pollDetails} />
      ) : (
        <div id="welcome">
          <h1 className="text-2xl font-bols">Welcome To Poll Creation</h1>
          <p className="text-sm">
            Create poll and get vote from your targeted user with just few click
          </p>
        </div>
      )}
    </div>
  );
}

export default Content
