import React from 'react'

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className='Pokecard' key={props.id}>
        <h2 className='Pokecard-title'>{props.name}</h2>
        <img src={imgSrc} alt="" />
        <div className='Pokecard-details'>
            <p>{props.type}</p>
            <p>{props.base_experience}</p>
        </div>
    </div>
  )
}

export default Pokecard