import React from "react";
import DisplayPols from "../components/DisplayPols";
import CreatePoll from "./CreatePoll";

function Sidebar(props) {
  let {pollData,handlePollDisplay} = props
    let opnenPollCreateForm = (e)=>{
        document.getElementById("create-poll").showModal();
    }
  return (
    <div className="col-span-4 bg-slate-400 p-2 rounded">
      <div id="searchandnew" className="flex gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-sm" />
        </div>
        <button
          className="btn btn-sm btn-success font-bold block"
          onClick={opnenPollCreateForm}
        >
          +
        </button>
      </div>
      <h2 className="text-base-100 text-2xl mt-8">List Of Polls</h2>
      <hr />
      <div id="polls" className="mt-4 space-y-1">
        {
          pollData.map((poll,index) => <DisplayPols key={poll.id} title={poll.title} onClick={() => handlePollDisplay(index)}/>)
        }
      </div>

      <CreatePoll />
    </div>
  );
}

export default Sidebar;
