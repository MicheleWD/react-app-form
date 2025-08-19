import React from 'react'

export default function post({data, liker}) {
  return (
    <div className={data.liker?"post active":"post"}>
        <div>
            <h2>{data.nom}</h2>
            <p>{data.description}</p>
        </div>
        <div>
            <button onClick={()=> liker(data)}>{data.liker?"Deja liker":"Liker"}</button>
        </div>
        
    </div>
  )
}
