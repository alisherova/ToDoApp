import "./index.css";
import { Todos } from "./components/Todos";
import { SingleTodo } from "./components/SingleTodo";
import BackgroundImg from "./bg.jpg";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="relative h-screen flex flex-col items-center bg-cover"
    >
      <div className="bg-black opacity-75 absolute z-0 w-full h-full"></div>
      <h1 className="text-white text-center font-bold my-20 text-4xl z-10">
        Todo Application with React/Redux
      </h1>
      <Todos />
      <SingleTodo />
    </div>
  );
}

export default App;
