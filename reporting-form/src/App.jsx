import React, {useState} from 'react'
import Compteur from './composants/compteur';
import Post from './composants/post';

export default function App() {
    const [posts, setPosts] = useState([
        {
            id:1,
            nom:"Michele",
            description:"Voici un exemple de texte pour les likes",
            liker:false
        },
        {
            id:2,
            nom:"Sergeo",
            description:"Voici un exemple de texte pour les likes",
            liker:false
        },
        {
            id:3,
            nom:"Andy",
            description:"Voici un exemple de texte pour les likes",
            liker:false
        }
    ]);
    const liker =(data)=>{
        const donnerCopier = [...posts];
        const index = posts.indexOf(data);
        donnerCopier[index] = { ...posts[index],
            liker: !posts[index].liker
        };
        setPosts(donnerCopier);
        console.log (donnerCopier);

    };
    const nbreLike = posts.filter(p=>p.liker)
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Les posts liker sont : {nbreLike.length}</h2>
            {posts.map((p) =>(<Post data={p} key={p.id} liker = {liker}/>))}
            {/* <Compteur age = {age}/> */}
        </div>
    )
}
