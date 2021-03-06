import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      onAdoptPet: props.onAdoptPet,
      pets: props.pets
    }
  }
  render() {
    return (<div className="ui cards">
              {this.pets.map(pet=><Pet name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} adapted={pet.adopted}/>)}
            </div>
    )
  }
}

export default PetBrowser
