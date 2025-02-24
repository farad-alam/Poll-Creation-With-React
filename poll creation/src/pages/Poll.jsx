import React from "react";
import PollOption from "../components/PollOption";
import Input from "../components/Input";
import Button from "../components/Button";

function Poll(props) {
  const { pollDetails } = props;
  const { title,description,options } = pollDetails;

  // handle Vote Submit
  const handleSubmitVote = (e)=>{

  }
  // Calculate Pecentage
  const calculatePercentage = ()=>{
    let totalVote = options.reduce((prevValue, nextValue) =>{
      return prevValue.vote + nextValue.vote
    },0)
    console.log(totalVote);
  }
  calculatePercentage()

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
          options.map((option, index) => {
           return <PollOption title={option.title} vote={option.vote} key={index}/>
          })
        }
      </div>
      <h3 className="mt-5 text-lg">Submit Your Answer:</h3>
      <hr />
      <Input type="text" name="name" placeholder="Enter Your Name..." label="Name:" onChange={handleSubmitVote} />
      <Button color="success" value="Submit" />
    </div>
  );
}

export default Poll;
