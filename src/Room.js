import React from 'react'
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const {roomID} = useParams();
  console.log(roomID); 
  const meeting = async(element) => {
    const appID = 424209479;
    const serverSecret = "9dfdddae779d73e0f6dcb94277c91acd"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Divyansh");

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container:element,
      scenario:{
        mode: ZegoUIKitPrebuilt.GroupCall,
      }
    })
  };
  

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
  
}

export default Room