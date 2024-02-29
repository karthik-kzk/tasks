import { useEffect, useState, useContext, createContext } from "react";
import "./App.css";
import Taskmodel from "./components/Taskmodel.js";
import mockData from "./components/data";
import { AddTask } from "./components/AddTask.js";

export const DataContext = createContext();

function App() {
  return <AddTask />;
}

export default App;
