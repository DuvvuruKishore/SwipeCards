import React, { useState,useMemo, useEffect,useContext } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import ArrowKeysReact from 'arrow-keys-react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

import One from './one.jpg';
import Two from './two.jpg';
import Three from './three.jpg';
import Four from './four.jpg';
import Five from './five.jpg';
import './Home.css';




const db = [
  {
    name: 'One',
    url: One
  },
  {
    name: 'Two',
    url: Two
  },
  {
    name: 'Three',
    url: Three
  },
  {
    name: 'Four',
    url: Four
  },
  {
    name: 'Five',
    url: Five
  }
]
const alreadyRemoved = []
let charactersState = db 

function Home() {
 
const [key,setKey]=useState({content:"press any key"});  
const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState();
  const [name,setName]=useState();
  
  


 useEffect(()=>{
    if(key.content==="left"){
        swipe('left');
        key.content=""
    }

 },[key.content])
 

 useEffect(()=>{
    if(key.content==="right"){
        swipe('right');
        key.content=""
    }

 },[key.content]);

 /*useEffect(()=>{
    function myFunction() {
       const myVar = setTimeout(alertFunc, 5000);
      }
      
      function alertFunc() {
        swipe('left');
      }
      myFunction();
 });*/

 useEffect(() => {
     
    const timer = setTimeout(() => {
      swipe('left')
    }, 5000);
    return () => clearTimeout(timer);

   
  });
 
 
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState);
    setName(name);
  }
  const swipe=(dir)=>{
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  ArrowKeysReact.config({
    left: () => { 
      setKey({
        content: 'left'
      });
    },
    right: () => {
      setKey({
        content: 'right'
      });
    }
  });
  
  
  return (
    <div {...ArrowKeysReact.events} tabIndex="1">
    <div className="root">
      <h1 className="welcome">Welcome Kishore</h1>
      <div className="logout">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary" >
      LOGOUT
    </Button>
    </Link>
    </div>
    
    
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='cards'>
              <h3>{character.name}</h3>
              
            </div>
            {characters.length===0?<h2>you have rated all the images ,ThankYou</h2>:null}
      
          </TinderCard>
        )}
      </div>
      {lastDirection? 
        <div>
        {lastDirection==="left"?
        <h2 className='infoText'>kishore you have rejected {name}</h2>:<h2 className='infoText'>kishore you have selected {name}</h2>
      }
        </div>
        : <h2>swipe to choose</h2>}
    
        {characters.length===0?<h2>you have rated all the images ,ThankYou</h2>:null}
      </div>

     
     
      </div>
  )
  
}

export default Home;