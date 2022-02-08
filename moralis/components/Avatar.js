import Image from "next/image";
import { useMoralis } from 'react-moralis';

function Avatar(logoutOnPress ) {

  const { username } = useMoralis();
  const {user, logout} = useMoralis();  
  return (
    
    <Image className="rounded-full cursor-pointer hover:opacity-75" 
        src={`https://avatars.dicebear.com/api/bottts/${ username || user.getUsername() }.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
    />

    
    );
}

export default Avatar;
