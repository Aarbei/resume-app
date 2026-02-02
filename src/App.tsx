import { useState } from "react";

import photo from "/public/photo.png";
import "./App.css";
import Header from "./components/Header";
import TechStack from "./components/TechStack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto flex items-center gap-16 pt-12">
        <div className="flex flex-col text-left p-5 pl-10 pr-10">
          <p className="text-gray-500 text-l font-semibold">Hi! I'm Alona.</p>
          <p className="text-gray-950 text-xl font-medium">
            A motivated{" "}
            <span className="text-orange-500 font-semibold">
              Junior Web Developer
            </span>{" "}
            who loves turning ideas into clean, responsive web applications.
          </p>
        </div>
        <a href="https://vite.dev" target="_blank">
          <div className="w-60 h-80 overflow-hidden rounded-b-full">
            <img
              src={photo}
              className="w-full h-full object-cover"
              alt="My photo"
            />
          </div>
        </a>
      </div>

      <TechStack />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
