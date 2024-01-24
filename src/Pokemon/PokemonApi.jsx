import { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon=()=>{
//objeto vacio ({})
const[poke,setpoke]=useState({});


const getPokemon =async() => {

    try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    const result = await response.data;
    console.log(result);
    setpoke(result)
}
 catch (error){
    console.log(error);
 }
}
useEffect(()=>{
    getPokemon();
},[])


return(
    <div>
        <h1>Pokemon :{poke.name}</h1>
    </div>
)

}

export default Pokemon;