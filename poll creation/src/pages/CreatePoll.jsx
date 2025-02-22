import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function CreatePoll() {
  return (
    <>
      <dialog id="create-poll" className="modal">
        <div className="modal-box bg-gray-200">
          <h3 className="font-bold text-lg">Create A New Poll</h3>
          <Input type="text" name="title" placeholder="Title" label="Title:" />
          <Input
            type="text"
            name="description"
            placeholder="Description"
            label="Description:"
          />
          <Input
            type="text"
            name="option"
            placeholder="options"
            label="Option 1"
          />
          <Input
            type="text"
            name="option"
            placeholder="options"
            label="Option 2"
          />

          <Button color="success" value="Submit" type="submit" />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default CreatePoll;
