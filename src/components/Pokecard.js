import React from 'react'



const Pokecard = ({items, errorMessage, isLoaded}) => {
    
    if (errorMessage) {
      return <div>Error: {errorMessage.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
        <li>{items.name}</li>
        <li><img src={items.sprites.front_default} alt="Pokemon" /></li>
        </ul>
      );
    }
  }

 

export default Pokecard