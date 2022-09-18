import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ContextHook() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h2>User: {user}</h2>
      <h2>Channel: {channel}</h2>
    </div>
  );
}

export default ContextHook;
