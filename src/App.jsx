import { useState } from "react";
import Faq from "./Faq";
const faqInfo = [
  {
    id: 1,
    quation: "what is react js?",
    ans: "React JS is a JavaScript library for building user interfaces. It is used to create single-page applications that can update the screen without reloading the page",
  },
  {
    id: 2,
    quation: "What is JSX?",
    ans: "JSX is a syntax extension that allows us to write HTML-like code in JavaScript. It makes it easier to create and render React elements. ",
  },
  {
    id: 3,
    quation: "What are the benefits of using React hooks?",
    ans: "React hooks are functions that let us use state and other React features without writing a class component.",
  },
  {
    id: 4,
    quation: "what is react js?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum ullam minus illum ad eligendi",
  },
];
function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="md:w-1/3 bg-white p-5 drop-shadow-xl">
          <h1 className="text-3xl font-bold">
            <span className="border-b-2 border-purple-500">G</span>eneral
            Quations
          </h1>
          <div>
            <div className="py-10">
              {faqInfo &&
                faqInfo.map((faq) => {
                  return <Faq key={faq.id} data={faq} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
