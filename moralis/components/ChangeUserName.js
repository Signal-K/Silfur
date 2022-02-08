import { useMoralis } from "react-moralis";



<head>
<script src="alert/dist/alertify.min.js"></script>
<link rel="stylesheet" href="alert/dist/alertify.core.css" />
<link rel="stylesheet" href="alert/dist/alertify.default.css" id="toggleCSS" />

</head>








function ChangeUserName() {
    const { setUserData , isUserUpdating, userError ,user } = useMoralis();

    const setUsername = () => {
            const username = prompt(`Enter your new UserName (Current UserName : ${user.get("username")})`); 
            
            if (!username) return;

            setUserData({
                username,
            });
        };

    

  return (
    <div className="text-sm absolute top-5 right-5 ">
        
        <button className="hover:opacity-75 hover:text-cyan-800 uppercase decoration-solid	" onClick={setUsername} disabled={isUserUpdating}>
            Change Your UserName 
        </button>
        
    </div>
  );
}

export default ChangeUserName;
