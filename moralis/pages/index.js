import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header';
import { useMoralis } from 'react-moralis';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated  } = useMoralis();

  if (!isAuthenticated) {
    return (
     <Login />
    );
  }
  return (
    
    <div className=" relative h-screen overflow-y-scroll overflow-hidden bg-gradient-to-b from-black to-cyan-700">
    {/* <video autoPlay muted loop id="videoBG" >         
    <source src="/images/vbg2.mp4" type="video/mp4"/>       
    </video> */}
      <Head>
        <title>Meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="flex absolute  w-full items-center justify-center space-y-9">
            */}

      <div>
        <div className="max-w mx-auto">
              
        {/*header*/}

        <Header />
        <Messages />

        {/*main*/}

        </div>     
      </div>
      
      </div>
    // </div>
  );
}
