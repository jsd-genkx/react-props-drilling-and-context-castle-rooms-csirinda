import { useState } from "react"


export default function SecretRoom({message1, handleReply}) {
    const [answer, setAnswer] = useState("")
  return (
    <div>
        <div>SecretRoom</div>
        <p>Message for JSD8:{message1}</p>
        <textarea 
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}/>
        <button
            onClick={() => {handleReply(answer)}}
        >Send Reply</button>

    </div>
    
  )
}
