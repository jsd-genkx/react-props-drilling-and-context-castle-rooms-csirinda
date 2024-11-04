import { useState } from 'react'
import './App.css'
import Castle from './components/Castle'

function App() {
  const [reply, setReply] = useState("")

  const message1 = "Do you love React?"

  const handleReply = (message) => {
    setReply(message);
  }

  return (
    <div>
      <p>Message for JSD8:{message1}</p>
      <p>Reply from the Secret Room: {reply ? reply : "Waiting..."} </p>
      < Castle message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default App
