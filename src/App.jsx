import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import PortalExample from "./components/Popup";

function App() {
  return(
    <>
    <TodoList/>
    <PortalExample />
    </>
  )
 
}

export default App;
