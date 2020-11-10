import React, {useState, useEffect} from 'react'

import Pokecard from './Pokecard'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const GetPoke = ({}) => {
    const [pokeCard, setpokeCard] = useState(null)
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null)

    function onTextAreaChange (event) {
        setpokeCard(event.target.value)
        console.log(pokeCard)
      }
    function handleSubmit (event) {
        event.preventDefault()
        setpokeCard(pokeCard);
        console.log(pokeCard)
    }  
      useEffect(() => {
        let pokeAPI = `https://pokeapi.co/api/v2/pokemon/`;
        fetch(`${pokeAPI}${pokeCard}`) 
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              //setErrorMessage(error);
            }
          )
      }, [pokeCard])
      console.log(items.name)
    return (
      <div>
            <h1>Pokemon Viewer</h1>  
                <form onSubmit={handleSubmit}>
                    {errorMessage && <p>{errorMessage}</p>}
                    <input
                    type="text"
                    id="poke-input"
                    name="poke-input"
                    placeholder="Choose your pokemon"
                    onChange={onTextAreaChange}
                    />
                 <button>Search Pokemon</button>           
            </form>
            
          <BrowserRouter>
            <Switch>
            <Route exact path="/pokemon/:pokemonName" render={(props) => <Pokecard {...props} items={items} errorMessage={errorMessage} isLoaded={isLoaded} />}  />
        
            </Switch> 
            <Link to={`/pokemon/${pokeCard}`}>Go To Pokemon {items.name} </Link>
       </BrowserRouter>

      </div>
     
    )
  }

export default GetPoke


         