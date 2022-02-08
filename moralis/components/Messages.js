import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
//Message Duration

const MINS_DURATION = 30;

function Messages() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef("null");
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending("createdAt").greaterThan("createdAt", new Date(Date.now() - MINS_DURATION * 60 * 1000)),
        [],
        {
            live : true,
            // real time

        }

    );
    return (
        <div className="pb-56">
            <div className="space-y-10 p-4">
                {data.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

           
            <div className="flex justify-center">
                
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
                {/* ref end of messages */}
            </div>
            <div>
                {/* Messages*/}
            </div>
            <div className="text-center mt-5 text-gray-500" ref={endOfMessagesRef}>
                <p>You are upto date {user.getUsername()}</p>
            </div>
        </div>
    )
}

export default Messages;
