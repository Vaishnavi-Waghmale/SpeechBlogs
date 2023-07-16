import React from "react";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './index.css';
const App = () => {

  const {
    transcript,
    listening,
    resetTransscript,
    browserSupportsSpeechRecognition

  } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return (
      <span>Browser does not support speech recognition!!</span>
    )
  }

  return (

    <div>
      <div className="header">
        <h1>Speech Recognition Application</h1>
        <p>Write your blogs by just speaking the content</p>
        <span>Start writing</span>
      </div>
      <div>
        <p>Microphone: {listening ? "On" : "Off"}</p>
        <button onClick={SpeechRecognition.startListening} type="">Start</button>
        <button onClick={SpeechRecognition.stopListening} type="">Stop</button>
        <button onClick={resetTransscript} type="">Reset</button>
        <p>{transcript}</p>
      </div>

    </div>
  )
}

export default App;