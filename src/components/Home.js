import React from "react";
import user,{username ,city} from "../data/user"
function Home() {
  
  return (
    <div id="home">
      <user />
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  
  );
}
export default Home