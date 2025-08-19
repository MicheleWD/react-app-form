import React, {useState} from 'react'

export default function compteur(props) {
    const [compteur, setCompteur] = useState(5);
    const increment = ()=>{
        setCompteur(compteur -1)
    }
    const decrement = ()=>{
        setCompteur(compteur +1)
    }
  return (
    <div className='compteur'>
        <button onClick={increment}>-</button>
        <p>{compteur}</p>
        <button onClick={decrement}>+</button>
    </div>
  )
}
