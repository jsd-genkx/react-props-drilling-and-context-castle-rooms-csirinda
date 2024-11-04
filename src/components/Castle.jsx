import Tower from "./Tower"

export default function Castle({message1, handleReply}) {
  return (
    <div>
        <div>Castle</div>
        < Tower message1={message1} handleReply={handleReply}  />
    </div>
    
  )
}
