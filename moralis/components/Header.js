import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header(){
    const { user } = useMoralis();


    return (
        <div className ="text-left lg:text-center sticky top-0 z-50 ">
            <div className="sticky top-0 p-8 z-50 border-b-2 shadow-sm border-cyan-900 bg-black text-cyan-400">

                <div className=" ">
                    
                    {/* <div  className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    </div> */}
                </div>
                <div>
                  
                    <div className="my-2 ml-1 h-24 w-24 icon-glow-on-hover lg:mx-auto">
                        <Avatar logoutOnpress />
                    
     
                    </div>
                    <h1 className="text-3xl">Welcome to Web 3.0 Chat</h1>
                    <p className="text-2xl font-bold text-red-300 uppercase truncate">{user.getUsername()}</p>

                    <ChangeUserName />
                    
                </div>
            </div>            
        </div>
    )
}
export default Header
