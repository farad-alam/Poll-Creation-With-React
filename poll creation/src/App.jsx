import { useState } from "react";
import "./index.css";
import Sidebar from "./pages/sidebar";
import Content from "./pages/content";

function App() {
  let poll = {
    title:"Best Programing Language in 2025"
  }
  return (
    <>
      <div className="w-8/12 mx-auto mt-24 grid grid-cols-12 gap-5 p-2">
        <Sidebar />
        <Content pollDetails={poll} />
      </div>
    </>
  );
}

export default App;
