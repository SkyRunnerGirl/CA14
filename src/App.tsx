import Calendar from "./Calendar";
import ToolBar from "./ToolBar";

export default function App() {
  return (
  <div>
    <h1 className="text-center m-2 p-2">Calendar App</h1>
    <ToolBar/>
    <Calendar/>
  </div>
  )
}