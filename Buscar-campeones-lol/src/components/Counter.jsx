import { useState } from "react"


export const Counter = () => {
  const [num,setnum] = useState(1);

    const sumar=()=>{

        setnum(num*2);
    }
        
    
  return (
    <>
    <section>
    <h2>{num}</h2>
    <button onClick={sumar}>Aumentar</button>
    </section>
    </>
  )
}
