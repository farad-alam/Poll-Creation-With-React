import React from "react";
import PollOption from "../components/PollOption";
import Input from "../components/Input";
import Button from "../components/Button";

function Poll(props) {
  const { pollDetails } = props;
  const { title,description,options } = pollDetails;
  return (
    <div id="poll">
      <h2 id="title" className="font-bold">
        {title}
      </h2>
      <p className="text-sm">
        {description}
      </p>
      <h3 className="mt-8 font-bold">Options:</h3>
      <div class="form-control space-y-2">
        {
          options.map(option => {
           return <PollOption title={option.title} />
          })
        }
        {/* <PollOption title="Python" />
        <PollOption title="C++" />
        <PollOption title="Java" />
        <PollOption title="Go" /> */}
      </div>
      <h3 className="mt-5 text-lg">Submit Your Answer:</h3>
      <hr />
      <Input type="text" name="name" placeholder="Enter Your Name..." label="Name:" />
      <Button color="success" value="Submit" />
    </div>
  );
}

export default Poll;
