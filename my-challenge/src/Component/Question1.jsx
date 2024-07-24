import { useState } from "react";
import React  from 'react'

function Question1() {
  const [elves, setElves] = useState([
    'Buddy',
    'Dobby',
    'Winky',
    'Bing',
    'Bernard'
  ]);

  return (
    <div>
      {/* */}
      {JSON.stringify(elves)}
    </div>
  );
}

export default Question1