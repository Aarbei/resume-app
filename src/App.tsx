import { useState } from "react";

import photo from "/public/photo.png";
import "./App.css";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import ContactForm from "./components/ContactForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto flex items-center gap-16 pt-20">
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
      <ProjectList />
      <ContactForm />
    </>
  );
}

export default App;
