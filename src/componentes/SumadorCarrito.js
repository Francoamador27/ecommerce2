import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0)
 const refresh = () => {
     setCount(count +1);
 };
  return (
    <div>
      <button
     onClick={refresh}>
      Hacer Click
      </button>
    </div>
  );
}
  export default Count;