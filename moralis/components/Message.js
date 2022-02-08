import Image from "next/image";
import TimeAgo from "timeago-react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({message}) {
const { user } = useMoralis();

const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
const test = message.get("username");
  return (
        

    
      <div className={`flex items-end space-x-2 relative ${isUserMessage && `justify-end`}` }>
        <div className={`relative h-8 w-8 ${isUserMessage &&  "order-last ml-1"}`}>
        <Image className="rounded-full cursor-pointer hover:opacity-75 hover:scale-130 hover:animate-bounce" 
        src={`https://avatars.dicebear.com/api/bottts/${message.get("username") }.svg`}
        
        layout="fill"
        />
        

            

        </div>  
        <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? `rounded-br-none bg-pink-300`: 
        'rounded-bl-none bg-blue-300' }`}>
            <p>{message.get("message")}</p>
            
        </div>
        <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage && `order-first pr-1`}`}
        datetime={message.get("createdAt")}
        />
       

        <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-pink-300" : "text-blue-300" }`}>
            {message.get("username")}
        </p>
        
      </div>
  )
}

export default Message;
