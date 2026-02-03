import reactLogo from "../assets/react.svg";
import javascriptLogo from "../assets/javascript-logo.png";
import typescriptLogo from "../assets/typescript-logo.png";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import nextjsLogo from "../assets/nextjs-logo.png";
import tailwindLogo from "../assets/tailwind-logo.png";
import gitLogo from "../assets/git-logo.png";
import githubLogo from "../assets/github-logo.svg";
import nodejsLogo from "../assets/nodejs-logo.png";
import mongoDBLogo from "../assets/mongodb-logo.png";
import sqlLogo from "../assets/sql-logo.png";
import restAPILogo from "../assets/restapi-logo.png";

function TechStack() {
  return (
    <div>
      <p className="text-gray-500 font-semibold  mt-36">Stack of tecnologies</p>
      <div className="flex flex-row items-center justify-center gap-3 mt-1 bg-white shadow-md">
        <img
          src={htmlLogo}
          className="object-contain h-9 w-9"
          alt="HTML logo"
        />
        <img
          src={cssLogo}
          className="object-contain h-10 w-10"
          alt="CSS logo"
        />
        <img
          src={javascriptLogo}
          className="object-cover h-11 w-11"
          alt="JavaScript logo"
        />
        <img
          src={typescriptLogo}
          className="object-cover h-9 w-9"
          alt="TypeScript logo"
        />
        <img
          src={tailwindLogo}
          className="object-contain h-10 w-10"
          alt="tailwind logo"
        />
        <img
          src={reactLogo}
          className="object-contain h-10 w-10"
          alt="React logo"
        />
        <img
          src={nextjsLogo}
          className="object-cover h-9 w-9"
          alt="NextJS logo"
        />
        <img src={gitLogo} className="object-cover h-9 w-9" alt="Git logo" />
        <img src={githubLogo} className="object-cover h-9 w-9" alt="Git logo" />
        <img
          src={nodejsLogo}
          className="object-contain h-14 w-14"
          alt="NodeJS logo"
        />
        <img
          src={mongoDBLogo}
          className="h-24 w-24 object-contain object-center"
          alt="MongoDB logo"
        />
        <img
          src={sqlLogo}
          className="h-14 w-14 object-contain"
          alt="SQL logo"
        />
        <img
          src={restAPILogo}
          className="h-12 w-12 object-contain"
          alt="RestAPI logo"
        />
      </div>
    </div>
  );
}
export default TechStack;
