import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState(""); 

    const sendMessage = (e) => {
        e.preventDefault();
        
        if(!message) return

        const Messages = Moralis.Object.extend("Messages");
        // Create a new instance of that class
        const messages = new Messages();
        // Set the values of the new instance
        messages
        .save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),
            

        }) 
        .then (message => {
            //the object was saved successfully
        },
        error => {
            console.log(error);
            //the object was not saved successfully
            // Message was not saved
        }
        );

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        //end of messages ref
        setMessage(""); 
        //set message to empty
    };
  return (
  <form className="flex fixed max-w-2xl bottom-10 bg-black opacity-90 px-6 py-1 shadow-xl rounded-full w-11/12 border-4 
  border-cyan-400">
      <input type="text" className="flex-grow outline-none bg-transparent pr-4 text-white   border-cyan-700
       placeholder-gray-500 " placeholder="Enter your message" 
       value={message}
       onChange={e => setMessage(e.target.value)} >

      </input>
      <button className="glow-on-hover-m" onClick={sendMessage} type="submit">Send</button>
  </form>
  )
}

export default SendMessage;
