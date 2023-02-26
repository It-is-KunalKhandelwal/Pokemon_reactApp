
import { useState,useEffect} from 'react';
import React from 'react';
import PokemenList from './PokemonList';
import Pagination from './pagination';
import axios from 'axios'

function App() {

  const [pokemon,setPokemon]=useState([])
  const [currenturl,setcurrenturl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const [nexturl,setnexturl]=useState()
  const [prevurl,setprevurl]=useState()
  const [loading,setloading]=useState(true)
  
  useEffect(()=>{
    setloading(true)
    
    axios.get(currenturl
      ).then(res=>{
    setloading(false)
    setnexturl(res.data.next)
    setprevurl(res.data.previous)
    setPokemon(res.data.results.map(p=>(p.name)))

  })
  
},[currenturl])
  

  function gotonextpage(){
    setcurrenturl(nexturl)
  

  }
  function gotoprevpage(){
    setcurrenturl(prevurl)
  }
  if(loading) return "loading...."
  
  return (
    <>
    <PokemenList pokemon={pokemon}/>
    <Pagination gotonextpage={nexturl?gotonextpage:null} gotoprevpage={prevurl?gotoprevpage:null}></Pagination>
    </>
    
  );
}











export default App;
