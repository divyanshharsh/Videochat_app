import React from 'react'
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const {roomID} = useParams();
  console.log(roomID); 
  const meeting = async(element) => {
    const appID = 86689295;
    const serverSecret = "6aca767172ee26c4dd77b057a85c0e51"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Saswat");

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
