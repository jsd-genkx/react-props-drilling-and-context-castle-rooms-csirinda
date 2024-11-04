import SecretRoom from "./SecretRoom"

export default function Tower({message1, handleReply}) {
  return (
    <div>
        <div>Tower</div>
        <SecretRoom message1={message1} handleReply={handleReply}  />  
    </div>
  )
}
