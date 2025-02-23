import { useState } from "react";
import "./index.css";
import Sidebar from "./pages/Sidebar";
import Content from "./pages/Content";
import pollData from "./poll.json"

function App() {
  // const [displayPoll, setDisplayPoll] = useState(null)
  // const handlePollDisplay = (index) =>{
  //   console.log("Clicked")
  //   setDisplayPoll(pollData(index))
  // }
  // ✅ Use state to store the selected poll
  const [displayPoll, setDisplayPoll] = useState(null);

  const handlePollDisplay = (index) => {
    console.log("Clicked", index);
    setDisplayPoll(pollData[index]); // ✅ Updating state triggers a re-render
  };
  return (
    <>
      <div className="w-8/12 mx-auto mt-24 grid grid-cols-12 gap-5 p-2">
        <Sidebar pollData={pollData} handlePollDisplay={handlePollDisplay}/>
        <Content pollDetails={displayPoll} />
      </div>
    </>
  );
}

export default App;
