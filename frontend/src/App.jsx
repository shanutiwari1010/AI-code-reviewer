import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const App = () => {
  const [code, setCode] = useState(`function sum (){
    return 1+1}`);

  const [review, setReview] = useState("");
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });

    console.log(response.data, "response");
    setReview(response.data);
  }

  return (
    <>
      <main className="grid grid-cols-2 w-full min-h-screen bg-[#343434] p-6 gap-3">
        <div className="bg-black rounded-xl flex flex-col justify-between border border-[#ddd]">
          <div className="text-white">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="flex items-end justify-end border-0 p-4">
            <button
              onClick={reviewCode}
              className="bg-white px-6 cursor-pointer py-2 rounded-lg"
            >
              Review
            </button>
          </div>
        </div>
        <div className="bg-[#484545] rounded-xl p-3 text-white overflow-auto">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
};

export default App;
