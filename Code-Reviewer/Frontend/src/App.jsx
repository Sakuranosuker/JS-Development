import { useState, useEffect } from "react"
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import Editor from "react-simple-code-editor"
import Axios from "axios"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(` function add(a, b) {
    return a + b;
  }`)

  const [reviewResult, setReviewResult] = useState(``)
  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await Axios.post("http://localhost:3000/ai/get-review", { code })
    console.log(response.data)
    setReviewResult(response.data)
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                borderRadius: 0.25 + "rem",
              }}
            />
          </div>
          <button className="review" onClick={reviewCode}>Review</button>
        </div>
        <div className="right">
          {reviewResult}
        </div>
      </main>
    </>
  )
}

export default App;
