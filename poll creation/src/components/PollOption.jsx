import React from "react";

function PollOption(props) {
  const { title } = props;
  return (
    <>
      <div class="grid grid-cols-2 cursor-pointer">
        <div id="options" className="flex gap-2">
          <input type="radio" name="radio-10" class="radio" checked="checked" />
          <span class="label-text font-bold">{title}</span>
        </div>
        <div id="display" className="flex gap-1 justify-end">
          <p className="btn btn-sm bg-primary text-white hover:bg-primary">20</p>
          <p className="btn btn-sm bg-success text-white hover:bg-success">
            100%
          </p>
        </div>
      </div>
    </>
  );
}

export default PollOption;
